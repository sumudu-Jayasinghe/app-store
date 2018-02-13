import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeRoutes } from './home.routes';
import { SharedModule } from '../shared/shared.module';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutes
  ],
  declarations: [DashboardComponent, ThemeComponent]
})
export class HomeModule { }
