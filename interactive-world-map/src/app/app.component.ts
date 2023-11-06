import { Component } from '@angular/core';
import { WorldbankService } from './worldbank.service';
import { CountryInfo } from './country-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive World Map';

  countryInfo!: CountryInfo

  constructor(private worldbank: WorldbankService){}

  onCountry(countryID: string){
    this.worldbank.getCountry(countryID).subscribe((response: any)=>{
      const result = response.body[1][0];
      this.countryInfo = {
        'id': result.id,
        'name': result.name,
        'capitalCity': result.capitalCity,
        'region': result.region.value,
        'incomeLevel': result.incomeLevel.value,
        'longitude': result.longitude,
        'latitude': result.latitude
      };
    });
  }
}
