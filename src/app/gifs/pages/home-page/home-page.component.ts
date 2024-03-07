import { Component } from '@angular/core';
import {GifsService} from "../../service/gifs.service";
import {Gif} from "../../interfaces/search-res";

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(public readonly gifService: GifsService) {

  }
  get gifs(): Gif[]{
    return this.gifService.gifs
  }
}
