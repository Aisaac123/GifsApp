import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {GifsService} from "../gifs/service/gifs.service";



@NgModule({
  declarations: [
    SideBarComponent
  ],
  exports: [
    SideBarComponent
  ],
  providers:[GifsService],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
