import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatDialogModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatBadgeModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScheduleOverviewComponent } from './overview/overview.component';
import { VehicleListComponent } from './vehicle/component/vehicle-list/vehicle-list.component';
import { DayListComponent } from './day/component/day-list/day-list.component';
import { TimeListComponent } from './time/component/time-list/time-list.component';
import { MonthListComponent } from './month/component/month-list/month-list.component';
import { WeekListComponent } from './week/component/week-list/week-list.component';
import { TodayListComponent } from './today/component/today-list/today-list.component';


@NgModule({
  declarations: [
    ScheduleOverviewComponent,
    VehicleListComponent,
    DayListComponent,
    TimeListComponent,
    MonthListComponent,
    WeekListComponent,
    TodayListComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    ReportRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTabsModule,
    AgmCoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule
  ]
})
export class ReportModule { }
