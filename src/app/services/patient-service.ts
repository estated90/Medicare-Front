import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { resolve } from "node:path";
import { Observable, Subject, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Patient } from "../models/patient.model";

@Injectable()
export class PatientService {

  patientsSubject = new Subject<any[]>();
  patientSubject = new Subject<any>();

  private patients = [];
  private patient!: Patient;
  stringJson: any;
  asyncResult: void;
  constructor(private httpClient: HttpClient){};

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  private apiUrl: string = 'http://localhost:8081/patient';

  emitPatientsSubject(){
    this.patientsSubject.next(this.patients.slice());
  }

  emitPatientSubject(){
    this.patientSubject.next(this.patient);
  }

  getPatientById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(this.apiUrl + '/' + id, { responseType: 'json' });
  }

  getPatientFromServer(){
    this.httpClient
      .get<any>(this.apiUrl+'/list', {responseType: 'json'})
      .subscribe(
        (response) => {
          console.log("Data has been retrieved successfully")
          this.patients = response;
          this.emitPatientsSubject();
        },
        (error) => {
          console.log('Error while retrieving the data'+ error);
        }
      );
      console.log(this.patients);
  }

  addPatient(patient:Patient){
    console.log('Sending new patient to service '+patient)
    let API_URL = `${this.apiUrl}/add`;
    this.stringJson = JSON.stringify(patient);
    this.httpClient
    .put(API_URL, this.stringJson, {headers:this.headers}).subscribe(
      () => {
        console.log('enregistrement terminé');
      },
      (error) => {
        console.log('Erreur de sauvegarde ! '+ error);
      }
    );
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
