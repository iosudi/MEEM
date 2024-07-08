import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-instructor-register-form',
  templateUrl: './instructor-register-form.component.html',
  styleUrls: ['./instructor-register-form.component.scss'],
})
export class InstructorRegisterFormComponent implements OnInit {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _FormBuilder: FormBuilder,
    private renderer: Renderer2,
    private _Router: Router
  ) {}

  isPasswordVisible: boolean = false;
  isRePasswordVisible: boolean = false;

  instructorRegisterForm: FormGroup = this._FormBuilder.group(
    {
      userName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{3,}$/)],
      ],
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/
          ),
        ],
      ],
      confirmPassword: [''],
      phone: ['', [Validators.required, Validators.pattern(/^(01\d{9})$/)]],
      age: [
        '',
        [Validators.required, Validators.pattern(/^(?:[2-7][0-9]|80)$/)],
      ],
      terms: [false, Validators.required],
    },
    { validators: [this.confirmPassword] as FormControlOptions }
  );

  ngOnInit(): void {
    this._AuthenticationService.progressBarValue.next((1 / 3) * 100);
  }

  confirmPassword(group: FormGroup): void {
    let password = group.get('password');
    let rePassword = group.get('confirmPassword');
    if (rePassword?.value == null) {
      rePassword?.setErrors({ required: true });
    } else if (password?.value != rePassword?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onSubmit() {
    if (this.instructorRegisterForm.invalid) {
      this.markFormGroupTouched(this.instructorRegisterForm);
    } else {
      this._Router.navigate(['/instructor_registration/specialization']);
    }
  }

  togglePasswordVisibility(input: string) {
    if (input === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else {
      this.isRePasswordVisible = !this.isRePasswordVisible;
    }
  }
}
