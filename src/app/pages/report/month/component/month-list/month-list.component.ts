import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';


import { filterJson } from '../../../../../common/filters/student-filter';
import { FilterStudentService } from '../../service/filter-student.service';
import { ConfirmDialogComponent } from 'src/app/pages/shared/confirm-dialog/confirm-dialog.component';
import { FilterDialogComponent } from 'src/app/pages/shared/filter-dialog/filter-dialog.component';
import { vehicleWiseFilterJson } from 'src/app/common/filters/vehicle-wise-filter';
import { timeWiseFilterJson } from 'src/app/common/filters/time-wise-filter';
import { monthWiseFilterJson } from 'src/app/common/filters/month-wise-filter';


const ELEMENT_DATA = [
  {vehicle_no: "vehicle-001", driver_number: "driver-001", total_date: '27', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'profit'},
  {vehicle_no: "vehicle-002", driver_number: "driver-002", total_date: '23', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'loss'},
  {vehicle_no: "vehicle-003", driver_number: "driver-003", total_date: '34', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'profit'},
  {vehicle_no: "vehicle-004", driver_number: "driver-004", total_date: '60', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'loss'},
  {vehicle_no: "vehicle-005", driver_number: "driver-005", total_date: '10', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'profit'},
  {vehicle_no: "vehicle-006", driver_number: "driver-006", total_date: '49', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'profit'},
  {vehicle_no: "vehicle-007", driver_number: "driver-007", total_date: '12', vehicle_type: "Trailer", month: "June - 2019", litre: "300", mileage: "1800", amount: "73000", internal_expect_mileage: '3000', external_expect_mileage: '2900', expect_amount: '2000', difference_amount: '2000',difference_mileage: '200', status: 'loss'},
]
   
@Component({
  selector: 'sbm-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.scss']
})
export class MonthListComponent implements OnInit {
  displayedColumns: string[] = ['vehicle_no', 'month', 'total_date', 'litre', 'mileage', 'internal_expect_mileage', 'external_expect_mileage', 'difference_mileage', 'amount', 'expect_amount', 'difference_amount', 'driver_number', 'vehicle_type', 'status'];
  dataSource = new MatTableDataSource<LoadDetails>(ELEMENT_DATA);
  registerForm: FormGroup;
  loanData: any;
  filters = [
    {
      clm:"month",
      val:"June - 2019",
      name:"Fuel month"
    },
    {
      clm:"liter",
      val:"300",
      name:"Litre"
    }
  ]
  public cardList = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    public dialog: MatDialog,  
    private formBuilder: FormBuilder,
    public filterService: FilterStudentService,
    ) { }
  
  ngOnInit() {
    localStorage.pageName = 'student';
    this.dataSource.paginator = this.paginator;
    this.loanData = [];

  }

  removeFilter(idx: number) {
    this.filters.splice(idx, 1);
  }

  openDeleteDialogue(idx: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {title: '', lblData: "Do you want to delete?", data: {}}
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  openFilter() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '1226px',
      data: {
        filterService: this.filterService,
        filterJson: monthWiseFilterJson,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}


export interface LoadDetails {
  vehicle_no: string;
  driver_number: string;
  vehicle_type: string;
  month: string;
  litre: string;
  mileage: string,
  amount: string,
  internal_expect_mileage: string,
  external_expect_mileage: string,
  expect_amount: string,
  difference_mileage: string,
  difference_amount: string,
  total_date: string;
  status: string;
}

