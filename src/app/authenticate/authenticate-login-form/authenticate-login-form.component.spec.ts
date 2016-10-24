import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';

import { SharedModule } from '../../shared';
import { AuthenticateLoginFormComponent } from './authenticate-login-form.component';
import { UserToLogIn } from '../user-to-log-in';

@Component({
  template: `
    <pb-authenticate-login-form [user]='user' (submited)='onSubmited($event)'></pb-authenticate-login-form>`
})
class TestHostComponent {
  user = new UserToLogIn('example@domain.com');
  submitedUser: UserToLogIn;
  onSubmited(user: UserToLogIn) { this.submitedUser = user; }
}

describe('Component: AuthenticateLoginForm', () => {
  let comp: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ AuthenticateLoginFormComponent, TestHostComponent ],
    });

    // create TestHostComponent instead of DashboardHeroComponent
    fixture  = TestBed.createComponent(TestHostComponent);
    comp = fixture.componentInstance;
  });

  it('should display hero name', fakeAsync(() => {
    fixture.detectChanges(); // trigger initial data binding
    tick();
    inputEl = fixture.debugElement.query(By.css('#login'));
    expect(inputEl.nativeElement.value).toContain(comp.user.login);
  }));
});
