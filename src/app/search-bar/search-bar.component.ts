import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searched = new EventEmitter<string>();
  @Output() countryID!: string;

  constructor() { }

  onSearch(event: Event){
    event?.preventDefault();
    this.countryID = (<HTMLInputElement>document.getElementById("searchBar")).value;
    this.searched.emit(this.countryID)
  }
}
