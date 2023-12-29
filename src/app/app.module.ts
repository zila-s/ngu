import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ScrollTComponent } from './scroll-t/scroll-t.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    ScrollTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
