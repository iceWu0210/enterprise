import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  template: `
  <h3 md-dialog-title>{{title}}</h3>
  <div md-dialog-content>
    <md-input-container class="full-width">
      <input type="text" mdInput placeholder="列表名称">
    </md-input-container>
  </div>
  <div md-dialog-actions>
    <button md-raised-button type="button" color='primary' (click)='onClick(true)'>确定</button>
    <button md-button type="button" md-dialog-close (click)= 'onClick(false)'>取消</button>
  </div>
  `,
  styles: []
})
export class NewTaskListComponent implements OnInit {
  title = '';
  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<NewTaskListComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onClick(result: boolean) {
    this.dialogRef.close(result);
  }

}
