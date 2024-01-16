import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>){

  }

}
