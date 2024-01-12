import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
import { ScrollTComponent } from './scroll-t/scroll-t.component';
import { IntersectionObserverComponent } from './intersection-observer/intersection-observer.component';
import {MatIconModule} from '@angular/material/icon';
import { CssTrainingComponent } from './css-training/css-training.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    ScrollTComponent,
    IntersectionObserverComponent,
    CssTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
