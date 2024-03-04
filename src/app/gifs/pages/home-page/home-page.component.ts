import { Component } from '@angular/core';
import {GifsService} from "../../service/gifs.service";
import {Gifs} from "../../interfaces/search-res";

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private readonly gifService: GifsService) {

  }
  get gifs(): Gifs[]{
    return this.gifService.gifs
  }
}
