import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientService } from './services/patient-service';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'patient', component: PatientViewComponent },
  { path: 'patient/add', component: AddPatientComponent },
  { path: '', component: PatientViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientViewComponent,
    AddPatientComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
