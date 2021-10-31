import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {StoreComponent} from "../../store/store.component";

@Component({
  selector: 'app-store-deluxe-dialog',
  templateUrl: './store-deluxe-dialog.component.html',
  styleUrls: ['./store-deluxe-dialog.component.scss']
})
export class StoreDeluxeDialogComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<StoreComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
