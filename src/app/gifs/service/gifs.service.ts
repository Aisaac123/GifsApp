import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/search-res";

const apiKey:string = "1503yzVmgaXuw8P0lGX4vIfcAPFeEq9p";
const apiUrl:string = "https://api.giphy.com/v1/gifs";
@Injectable()
export class GifsService {

  private TagHistory:string[] = [];
  get tagHistory():string[]{
    return [...this.TagHistory];
  }
  private gifsList: Gif[] = [];
  get gifs():Gif[]{
    return [...this.gifsList];
  }
  public searchTag(tag: string):void{


    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('limit', '20')
      .set('q', tag);

    this.http.get<SearchResponse>(`${apiUrl}/search?`, { params })
      .subscribe(response => {

        this.gifsList = response.data;
        this.organizeTag(tag);
        this.insertTag(tag)
        this.saveLocalStorage();
      })

  }
  private organizeTag(tag:string){

    if (this.TagHistory.includes(tag))
      this.TagHistory = this.tagHistory.filter(oldTag => oldTag !== tag)
  }
  private insertTag(tag:string){
    if(tag.length <= 0){
      return;
    }
    this.TagHistory.unshift(tag)
    this.TagHistory = this.tagHistory.splice(0,20)
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this.tagHistory))
  }

  private loadLocalStorage():void{
    const temporal = localStorage.getItem('history')
    if (temporal != null){
      this.TagHistory = JSON.parse(temporal);
    }
  }
  public a = 123;
  constructor(private http:HttpClient) {
    this.loadLocalStorage()
    this.searchTag(this.tagHistory[0])
    this.a +=20;
  }
}
