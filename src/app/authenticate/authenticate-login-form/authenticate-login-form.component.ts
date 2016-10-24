/* tslint:disable: member-ordering forin */
import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserToLogIn } from '../user-to-log-in';
import { Input } from '@angular/core';

@Component({
  selector: 'pb-authenticate-login-form',
  templateUrl: './authenticate-login-form.component.html',
  styleUrls: ['./authenticate-login-form.component.scss']
})
export class AuthenticateLoginFormComponent implements AfterViewChecked {
  loginForm: NgForm;
  @ViewChild('loginForm') currentForm: NgForm;
  @Input() user: UserToLogIn;

  ngAfterViewChecked() {
    this.formChanged();
  }

  onSubmit() {
    alert('Submitting...');
  }

  formChanged() {
    if (this.currentForm === this.loginForm) { return; }
    this.loginForm = this.currentForm;

    if (this.loginForm) {
      this.loginForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'login': '',
    'password': ''
  };

  validationMessages = {
    'login': {
      'required':      'Login is required.',
      'minlength':     'Login must be at least 4 characters long.',
      'maxlength':     'Login cannot be more than 24 characters long.',
    },
    'password': {
      'required':      'Password is required.',
      'minlength':     'Login must be at least 8 characters long.',
    }
  };
}
