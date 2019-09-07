import { NgModule } from '@angular/core';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdInputModule, MdListModule } from '@angular/material';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule
  ],
  declarations: []
})
export class SharedModule { }
