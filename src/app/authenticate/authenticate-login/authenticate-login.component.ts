import { Component, OnInit } from '@angular/core';

import { UserToLogIn } from '../user-to-log-in';

@Component({
  selector: 'pb-authenticate-login',
  templateUrl: './authenticate-login.component.html',
  styleUrls: ['./authenticate-login.component.scss']
})
export class AuthenticateLoginComponent implements OnInit {
  user = new UserToLogIn();

  constructor() {}

  ngOnInit() {}
}
