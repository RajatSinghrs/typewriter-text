import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypewriterModule } from '../../../typewriter/src/lib/typewriter.module';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    TypewriterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
