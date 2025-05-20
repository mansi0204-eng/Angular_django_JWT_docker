import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  form: any = {
    list: [],
    searchParams: {
      id: null,
      firstName: ''
    },
    deleteParams: {},
    preload: [],
    message: '',
    pageNo: 0
  }

  constructor(private httpService: HttpServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.preload();
    this.search();
  }

  next() {
    this.form.pageNo++;
    console.log('pageNo => ', this.form.pageNo)
    this.search();
  }

  previous() {
    this.form.pageNo--;
    console.log('pageNo => ', this.form.pageNo)
    this.search();
  }

  preload() {
    var self = this;
    this.httpService.get('http://localhost:8000/ORSAPI/preload/', function (res: any) {
      self.form.preload = res.result.preload;
    });
  }

  search() {
    var self = this;
    this.httpService.post('http://localhost:8000/ORSAPI/search/' + this.form.pageNo + '/', this.form.searchParams, function (res: any) {
      self.form.list = res.result.data;
    })
  }

  edit(page: any) {
    this.router.navigateByUrl(page);
  }

  onCheckboxChange(userId: number) {
    console.log('Checkbox with ID', userId, 'is checked/unchecked');
    this.form.deleteParams.id = userId;
  }

  delete() {
    var self = this;
    this.httpService.get('http://localhost:8000/ORSAPI/delete/' + this.form.deleteParams.id + '/', function (res: any) {
      self.form.message = res.result.message;
      console.log('message => ', self.form.message)
      self.form.pageNo = 0;
      self.search();
    });
  }
}
