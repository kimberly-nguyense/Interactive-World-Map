import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  @Output() clicked = new EventEmitter<string>();

  ngOnInit(): void {
    this.addClickEvents();
  }

  addClickEvents(){
    let allPaths = Array.from(document.querySelectorAll("path"));
    for(let i=0; i<allPaths.length; i++){
      let path = allPaths[i];
      path.addEventListener("click", () => {
        this.clicked.emit(path.id)
      })
    }
  }
}