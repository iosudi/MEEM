import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent, AuthNavbarComponent],
  imports: [CommonModule, LayoutsRoutingModule],
})
export class LayoutsModule {}
