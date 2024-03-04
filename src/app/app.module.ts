import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GifsModule} from "./gifs/gifs.module";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {GifsService} from "./gifs/service/gifs.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
