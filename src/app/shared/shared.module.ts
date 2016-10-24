import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { InputPasswordRevealDirective } from 'angular2-input-password-reveal';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    InputPasswordRevealDirective
  ],
  exports:      [
    CommonModule,
    FormsModule,
    InputPasswordRevealDirective
  ]
})
export class SharedModule { }
