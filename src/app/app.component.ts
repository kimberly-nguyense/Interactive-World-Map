import { Component, ViewChild } from '@angular/core';
import { WorldbankService } from './worldbank.service';
import { CountryInfo } from './country-info';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive World Map';
  countryID: string | undefined;
  countryInfo: CountryInfo | undefined;

  constructor(private worldbank: WorldbankService){}

  onCountry(countryID: string){
    this.worldbank.getCountry(countryID).subscribe((response: any)=>{
      try{
        const result = response.body[1][0];
        this.countryInfo = {
          'id': result.iso2Code,
          'name': result.name,
          'capitalCity': result.capitalCity,
          'region': result.region.value,
          'incomeLevel': result.incomeLevel.value,
          'longitude': result.longitude,
          'latitude': result.latitude
        };
        this.removeHighlight();
        this.highlightCountry(this.countryInfo.id);
      }catch(TypeError){
        this.removeHighlight();
        this.countryInfo = undefined;
      }
    });
  }

  removeHighlight(){
    document.querySelector("#"+this.countryID)?.removeAttribute('selected');
  }
  
  highlightCountry(countryID: string){
    this.countryID = countryID;
    document.querySelector("#"+this.countryID)?.setAttribute('selected','');
  }
}
