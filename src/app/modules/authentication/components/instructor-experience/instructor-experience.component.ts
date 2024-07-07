import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-instructor-experience',
  templateUrl: './instructor-experience.component.html',
  styleUrls: ['./instructor-experience.component.scss'],
})
export class InstructorExperienceComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _FormBuilder: FormBuilder,
    private _Router: Router
  ) {}
  experience!: string;

  experienceForm: FormGroup = this._FormBuilder.group({
    experience: ['', Validators.required],
  });
  ngOnInit(): void {
    this._AuthenticationService.progressBarValue.next((3 / 3) * 100);
  }

  selectExperience(value: string): void {
    this.experienceForm.get('experience')?.setValue(value);
    this.experience = value;
  }

  onSubmit(): void {
    if (this.experienceForm.valid) {
      this._Router.navigate(['/instructor_registration/login']);
    } else {
      this.experienceForm.markAllAsTouched();
    }
  }
}
