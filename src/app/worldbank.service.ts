import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {

  constructor(private httpclient: HttpClient) { }

  getCountry(countryID: string){
    return this.httpclient.get('https://api.worldbank.org/v2/country/'+countryID+'?format=json',
      {responseType:'json',observe:'response'})
  }
}
