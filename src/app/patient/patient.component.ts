import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient-service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  @Input() id!: number;
	@Input() given!: string;
	@Input() family!: string;
	@Input() dob!: Date;
  @Input() sex!: string;
  @Input() address!: string;
  @Input() phone!: string;

  constructor(){};

  ngOnInit(): void {};

}
