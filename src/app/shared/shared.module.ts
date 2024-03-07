import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {GifsService} from "../gifs/service/gifs.service";
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SideBarComponent,
    LazyImageComponent,
  ],
  exports: [
    SideBarComponent,
    LazyImageComponent
  ],
  providers:[GifsService],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
