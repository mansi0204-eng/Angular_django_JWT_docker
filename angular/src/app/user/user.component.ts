import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form: any = {
    data: {},
    message: '',
    preload: []
  }

  fileToUpload: any = null;

  constructor(private httpService: HttpServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.form.data.id = params["id"] ?? 0;
      console.log("id ====>>> ", this.form.data.id)
    })
  }

  ngOnInit(): void {
    if (this.form.data.id && this.form.data.id > 0) {
      this.display();
    }
  }

  display() {
    var self = this;
    this.httpService.get('http://localhost:8000/ORSAPI/get/' + this.form.data.id + '/', function (res: any) {
      console.log(res)
      self.form.data = res.result.data;
    });
  }

  save() {
    var self = this;
    this.httpService.post('http://localhost:8000/ORSAPI/save/', this.form.data, function (res: any) {
      console.log('res => ', res)

      self.form.message = '';

      if (res.result.message) {
        self.form.message = res.result.message;
      }
    });
  }
}