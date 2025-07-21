import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterComponent } from '../../../typewriter/src/public-api';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        AppComponent,
    TypewriterComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
