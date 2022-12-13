import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourAddComponent } from './components/tour-add.component';
import { TourEditComponent } from './components/tour-edit.component';
import { TourDeleteComponent } from './components/tour-delete.component';
import { ToursComponent } from './components/tours.component';
import { TourComponent } from './components/tour.component';
import { TourRoutingModule } from './tour-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TourAddComponent,
    TourEditComponent,
    TourDeleteComponent,
    ToursComponent,
    TourComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TourModule { }
