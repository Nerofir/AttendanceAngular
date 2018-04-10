import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceService } from './attendance.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule
  ],
  declarations: [
    AppComponent,
    AttendanceComponent
  ],
  providers: [AttendanceService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
