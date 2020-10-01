import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {  MatToolbarModule, 
//           MatCardModule, 
//           MatFormFieldModule, 
//           MatInputModule,
//           MatButtonModule,
//           MatIconModule,
//           MatTabsModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
// import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEmpComponent } from './add-emp/add-emp.component';







@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    DashboardComponent, 
    TopnavComponent,
    SignUpComponent,
    EmpDetailsComponent,
    AddEmpComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
