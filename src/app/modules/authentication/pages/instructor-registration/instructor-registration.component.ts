import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-instructor-registration',
  templateUrl: './instructor-registration.component.html',
  styleUrls: ['./instructor-registration.component.scss'],
})
export class InstructorRegistrationComponent implements OnInit {
  value: number = 0;
  constructor(private _AuthenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this._AuthenticationService.progressBarValue.subscribe({
      next: (value) => (this.value = value),
      error: (error) => console.error('Error:', error),
    });
  }
}
