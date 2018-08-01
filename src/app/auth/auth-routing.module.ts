import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

const authRouting: Routes = [
  { path: 'register', component: SignupComponent, data: {title : 'Sign Up'} },
  { path: 'login', component: SigninComponent, data: {title : 'Sign In'} },
];

@NgModule({
  imports: [RouterModule.forChild(authRouting)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
