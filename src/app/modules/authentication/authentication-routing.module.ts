import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorExperienceComponent } from './components/instructor-experience/instructor-experience.component';
import { InstructorRegisterFormComponent } from './components/instructor-register-form/instructor-register-form.component';
import { InstructorSpecializationComponent } from './components/instructor-specialization/instructor-specialization.component';
import { InstructorRegistrationComponent } from './pages/instructor-registration/instructor-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'instructor_registration',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'MEEM Login - Log in to your MEEM account',
  },
  {
    path: 'instructor_registration',
    component: InstructorRegistrationComponent,
    title: 'Sign up for MEEM | Teach Online with us',
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
      },
      {
        path: 'register',
        component: InstructorRegisterFormComponent,
      },
      {
        path: 'teaching-experience',
        component: InstructorExperienceComponent,
      },
      {
        path: 'specialization',
        component: InstructorSpecializationComponent,
      },
    ],
  },
  {
    path: 'student_registration',
    component: StudentRegistrationComponent,
    title: 'Sign up on MEEM | Student Accounts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
