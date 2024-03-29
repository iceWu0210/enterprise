import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h3 md-dialog-title>{{title}}</h3>
    <div md-dialog-content>
      {{content}}
    </div>
    <div md-dialog-actions>
      <button md-raised-button type="button" color='primary' (click)='onClick(true)'>确定</button>
      <button md-button type="button" md-dialog-close (click)= 'onClick(false)'>取消</button>
    </div>
  `,
  styles: [`

  `]
})
export class ConfirmDialogComponent implements OnInit {
  title = '';
  content = '';
  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<ConfirmDialogComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }
}
