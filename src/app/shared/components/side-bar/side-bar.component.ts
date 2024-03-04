import { Component } from '@angular/core';
import {GifsService} from "../../../gifs/service/gifs.service";

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(public readonly gifsService:GifsService) {
  }
}
