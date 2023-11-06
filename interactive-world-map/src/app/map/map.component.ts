import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  @Output() clicked = new EventEmitter<string>();
  countryID!: string

  ngOnInit(): void {
    this.addClickEvents();
  }

  addClickEvents(){
    let allPaths = Array.from(document.querySelectorAll("path"));
    for(let i=0; i<allPaths.length; i++){
      let path = allPaths[i];
      path.addEventListener("click", () => {
        document.querySelector("#"+this.countryID)?.removeAttribute('selected');
        this.countryID = path.id;
        document.querySelector("#"+this.countryID)?.setAttribute('selected','');
        this.clicked.emit(this.countryID)
      })
    }
  }
}
