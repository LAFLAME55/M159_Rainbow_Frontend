import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
// For MDB Angular Pro
import { NavbarModule, WavesModule, ButtonsModule } from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showSideNav = false;
  showFiller = false;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // openSideNav(){
  //   if (this.showSideNav == false){
  //     console.log("open")
  //   } else {
  //     console.log("closed")
  //   }
  // }

  goHome(){
    this.router.navigate(['home']);
  }

  goOverview(){
    this.router.navigate(['overview']);
  }

  goOps(){
    this.router.navigate(['operators']);
  }

  goStore(){
    this.router.navigate(['store']);
  }


}
