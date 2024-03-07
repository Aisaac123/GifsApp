import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/search-res";

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input()
  public gif!:Gif

  ngOnInit(): void {
    if (!this.gif) throw new Error("Gif no proporcionado")
  }

}