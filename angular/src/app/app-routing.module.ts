import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path:'userlist',
    component:UserlistComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
