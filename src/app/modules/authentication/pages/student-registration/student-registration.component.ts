import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss'],
})
export class StudentRegistrationComponent {
  @ViewChild('responsiveImage', { static: true }) responsiveImage!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
    private _FormBuilder: FormBuilder
  ) {}

  private breakpointSubscription!: Subscription;

  isPasswordVisible: boolean = false;
  isRePasswordVisible: boolean = false;

  registerForm: FormGroup = this._FormBuilder.group(
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
    this.breakpointSubscription = this.breakpointObserver
      .observe('(max-width: 992px)')
      .subscribe((result) => {
        if (result.matches) {
          this.renderer.setAttribute(
            this.responsiveImage.nativeElement,
            'src',
            '../../../../../assets/images/mobile-illustration-x1.png'
          );
        } else {
          this.renderer.setAttribute(
            this.responsiveImage.nativeElement,
            'src',
            '../../../../../assets/images/desktop-illustration-step-1-x1.png'
          );
        }
      });
  }

  togglePasswordVisibility(input: string) {
    if (input === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else {
      this.isRePasswordVisible = !this.isRePasswordVisible;
    }
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
    if (this.registerForm.invalid) {
      this.markFormGroupTouched(this.registerForm);
    } else {
      console.log('hello');
    }
  }

  onStrengthChange(score: number) {}
}
