import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PatientService {

  patientSubject = new Subject<any[]>();

  private patients = [];

  constructor(private httpClient: HttpClient){};

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  emitPatientSubject(){
    this.patientSubject.next(this.patients.slice());
  }

  getPatientById(id: number){
    const patient = this.patients.find(
      (patientObject: { id: number; }) =>{
        return patientObject.id === id;
      }
    );
    return patient;
  }

  getPatientFromServer(){
    this.httpClient
      .get<any>('http://localhost:8081/patient/list', {responseType: 'json'})
      .subscribe(
        (response) => {
          console.log("Data has been retrieved successfully")
          this.patients = response;
          this.emitPatientSubject();
        },
        (error) => {
          console.log('Error while retrieving the data'+ error);
        }
      );
      console.log(this.patients);
  }

  addPatient(family: string, given: string, dob: string, sex: string, address: string, phone: string){
    console.log('Sending new patient to service')
    let body = 'family=${family}&given=${given}&dob=${dob}&sex=${sex}&address=${address}&phone=${phone}'
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    this.httpClient
    .put('http://localhost:8081/patient/add', body, options)
  }

}
