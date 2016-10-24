import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { AuthenticateComponent } from './authenticate.component';
import { AuthenticateLoginComponent } from './authenticate-login/authenticate-login.component';
import { AuthenticateLoginFormComponent } from './authenticate-login-form/authenticate-login-form.component';

@NgModule({
  imports: [
    SharedModule,
    AuthenticateRoutingModule
  ],
  declarations: [
    AuthenticateComponent,
    AuthenticateLoginComponent,
    AuthenticateLoginFormComponent
  ]
})
export class AuthenticateModule {}
