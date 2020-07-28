import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-konfirmasi',
  templateUrl: './dialog-konfirmasi.component.html',
  styleUrls: ['./dialog-konfirmasi.component.css']
})
export class DialogKonfirmasiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  konfirmasi()
  {
    	this.dialogRef.close(true);
  }

}
