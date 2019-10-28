import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule, MatIconModule, MatDialogModule } from '@angular/material';
import { AddComponent } from './dialogs/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './dialogs/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MainNavComponent,
    EmployeeComponent,
    AddComponent,
    EditComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,

  ],
  providers: [
    AppService
  ],
  entryComponents: [
    AddComponent,
    EditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
