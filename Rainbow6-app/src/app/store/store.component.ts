import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StoreDialogComponent} from "../dialog/store-dialog/store-dialog.component";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  errorMessage = "Something went wrong"

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.width = "1250px";
    dialogConfig.height = '800px';

    const dialogRef = this.dialog.open(StoreDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result =>{
    },
      error => {
        this.errorMessage = error.message()
        console.log("Open Dialog failed", 500)
      })
  }
}
