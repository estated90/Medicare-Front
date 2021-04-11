import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient-service';

@Component({
  selector: 'app-patient-consult',
  templateUrl: './patient-consult.component.html',
  styleUrls: ['./patient-consult.component.scss']
})
export class PatientConsultComponent implements OnInit {

  patient!: Patient;
  loaded!: boolean;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient(): void{
    const id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(+id).subscribe(patient => {
      this.patient= patient
      this.loaded = true;
    });
  }

  returnToPatient(){
    this.router.navigate(['/patient']);
  }

}
