import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateLoginComponent } from './authenticate-login/authenticate-login.component';

const routes: Routes = [
  { path: 'login', component: AuthenticateLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule {}
