import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleOverviewComponent } from './overview/overview.component';
import { VehicleListComponent } from './vehicle/component/vehicle-list/vehicle-list.component';
import { DayListComponent } from './day/component/day-list/day-list.component';
import { TimeListComponent } from './time/component/time-list/time-list.component';
import { MonthListComponent } from './month/component/month-list/month-list.component';
import { WeekListComponent } from './week/component/week-list/week-list.component';
import { TodayListComponent } from './today/component/today-list/today-list.component';



const routes: Routes = [
  { path: 'overview', component: ScheduleOverviewComponent },
  { path: 'vehicle', component: VehicleListComponent },
  { path: 'day', component: DayListComponent },
  { path: 'time', component: TimeListComponent },
  { path: 'month', component: MonthListComponent },
  { path: 'week', component: WeekListComponent },
  { path: 'today', component: TodayListComponent },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
