import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RegularsModule } from './regulars/regulars.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegularsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
