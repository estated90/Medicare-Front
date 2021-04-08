import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient-service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patientForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.patientForm = this.formBuilder.group({
      family:['', Validators.required],
      given:['', Validators.required],
      dob: ['', Validators.required],
      sex:['', Validators.required],
      address:['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  onSubmitForm() {
    console.log('adding a new patient')
    const formValue = this.patientForm.value;
    this.patientService.addPatient(formValue['family'], formValue['given'],formValue['dob'],formValue['sex'],formValue['address'],formValue['phone']);
    //this.router.navigate(['/patient']);
  }

}
