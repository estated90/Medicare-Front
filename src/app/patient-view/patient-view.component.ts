import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient-service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

	patients!: any[];
  patientSubscription!: Subscription;

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit(): void {
    this.patientService.getPatientFromServer();
    this.patientSubscription= this.patientService.patientsSubject.subscribe(
      (patients: Patient[]) =>{
        this.patients= patients;
      }
    );
    this.patientService.emitPatientsSubject();
  }

  ngOnDestroy(){
    this.patientSubscription.unsubscribe();
  }

  onFetch(){
    this.patientService.getPatientFromServer();
  }

  goToNewPatient(){
    this.router.navigate(['/patient', 'add']);
  }

}
