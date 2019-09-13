import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule } from '@angular/material';
import { LoginModule } from './login/login.module'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectModule } from './project/project.module';
import {TaskModule} from './task/task.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MdSidenavModule,
    LoginModule,
    ProjectModule,
    AppRoutingModule,
    TaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
