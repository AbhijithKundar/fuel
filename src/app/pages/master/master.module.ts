import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
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
import { MasterOverviewComponent } from './overview/overview.component';
import { BusDetailsDialogComponent } from './bus/component/bus-details-dialog/bus-details-dialog.component';
import { BusListComponent } from './bus/component/bus-list/bus-list.component';
import { DriverDetailsDialogComponent } from './driver/component/driver-details-dialog/driver-details-dialog.component';
import { DriverListComponent } from './driver/component/driver-list/driver-list.component';


@NgModule({
  declarations: [
    MasterOverviewComponent,
    BusListComponent,
    BusDetailsDialogComponent,
    DriverDetailsDialogComponent,
    DriverListComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    MasterRoutingModule,
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
  ],
  providers: [
  ],
  entryComponents: [DriverDetailsDialogComponent, BusDetailsDialogComponent]
})
export class MasterModule { }
