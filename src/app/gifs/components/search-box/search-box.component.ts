import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../service/gifs.service";

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtTag')
  public tagInput!:ElementRef<HTMLInputElement>
  searchTag(){
    const text = this.tagInput.nativeElement.value;
    this._service.searchTag(text)
    this.tagInput.nativeElement.value = "";
  }
  constructor(public readonly _service:GifsService) {
  }

}
