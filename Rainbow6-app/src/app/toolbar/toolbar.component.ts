import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showSideNav = false;
  showFiller = false;


  constructor() { }

  ngOnInit(): void {
  }

  openSideNav(){
    if (this.showSideNav == false){
      console.log("open")
    } else {
      console.log("closed")
    }
  }

}
