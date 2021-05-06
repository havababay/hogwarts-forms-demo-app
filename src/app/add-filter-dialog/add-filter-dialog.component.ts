import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-filter-dialog',
  templateUrl: './add-filter-dialog.component.html',
  styleUrls: ['./add-filter-dialog.component.css']
})
export class AddFilterDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddFilterDialogComponent>,) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}