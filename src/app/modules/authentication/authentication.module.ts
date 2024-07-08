import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { InstructorExperienceComponent } from './components/instructor-experience/instructor-experience.component';
import { InstructorRegisterFormComponent } from './components/instructor-register-form/instructor-register-form.component';
import { InstructorSpecializationComponent } from './components/instructor-specialization/instructor-specialization.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { InstructorRegistrationComponent } from './pages/instructor-registration/instructor-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { AuthenticationService } from './services/authentication.service';
@NgModule({
  declarations: [
    InstructorRegistrationComponent,
    StudentRegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    InstructorRegisterFormComponent,
    InstructorExperienceComponent,
    InstructorSpecializationComponent,
  ],
  providers: [AuthenticationService],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    CheckboxModule,
    RadioButtonModule,
  ],
})
export class AuthenticationModule {}
