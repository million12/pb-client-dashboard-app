import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App root */
import { AppComponent } from './app.component';

/* Feature modules */
import { CoreModule } from './core/core.module';
import { AuthenticateModule } from './authenticate/authenticate.module';

/* Routing module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AuthenticateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
