import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-instructor-specialization',
  templateUrl: './instructor-specialization.component.html',
  styleUrls: ['./instructor-specialization.component.scss'],
})
export class InstructorSpecializationComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _FormBuilder: FormBuilder,
    private _Router: Router
  ) {}

  specialization!: string;

  specializationForm: FormGroup = this._FormBuilder.group({
    specialization: ['', Validators.required],
  });

  ngOnInit(): void {
    this._AuthenticationService.progressBarValue.next((2 / 3) * 100);
  }

  selectSpecialization(value: string): void {
    this.specializationForm.get('specialization')?.setValue(value);
    this.specialization = value;
  }

  onSubmit(): void {
    if (this.specializationForm.valid) {
      this._Router.navigate(['/instructor_registration/teaching-experience']);
    } else {
      this.specializationForm.markAllAsTouched();
    }
  }
}
