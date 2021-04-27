import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PassbookComponent } from './passbook/passbook.component';
// import {FormsModule} from '@angular/forms';
import { DataService } from './data.service';
import { MatTableModule } from '@angular/material/table';
// import { AddDataComponent } from './add-data/add-data.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddComponent } from './add/add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {RouterModule} from '@angular/router';
import { AddFakeComponent } from './add-fake/add-fake.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule} from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    PassbookComponent,
    AddComponent,
    AddFakeComponent,
    // AddDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    [NgbModule],
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
