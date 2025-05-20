import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    data: {},
    message: '',
  }

  constructor(private httpService: HttpServiceService, public router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.form.message = params['errorMessage'] || null;
      console.log('msssssssssgggggggggggg = >', this.form.message)
    });
  }



  signIn() {
    var self = this;
    this.httpService.post('http://localhost:8000/ORSAPI/login/', this.form.data, function (res: any) {
      console.log('res => ', res)
      self.form.message = '';

      if (res.result.message) {
        self.form.message = res.result.message;
      }

      if (res.result.data != null) {
        localStorage.setItem('firstName', res.result.data.firstName)
        localStorage.setItem('token', 'Bearer ' + res.result.token)
        self.router.navigateByUrl('welcome');
      }
    })
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }
}