import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  @ViewChild('responsiveImage', { static: true }) responsiveImage!: ElementRef;
  constructor(
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver,
    private _FormBuilder: FormBuilder
  ) {}

  private breakpointSubscription!: Subscription;

  forgotPassword: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

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

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onSubmit() {
    if (this.forgotPassword.invalid) {
      this.markFormGroupTouched(this.forgotPassword);
    } else {
      console.log('hello');
    }
  }
}
