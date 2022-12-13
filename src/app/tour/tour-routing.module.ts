import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourAddComponent } from './components/tour-add.component';
import { TourEditComponent } from './components/tour-edit.component';
import { TourDeleteComponent } from './components/tour-delete.component';
import { ToursComponent } from './components/tours.component';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './components/tour.component';
const routes: Routes = [
  { path: '', component: ToursComponent },
  { path: ':id/show', component: TourComponent },
  { path: 'add', component: TourAddComponent},
  { path: ':id/edit', component: TourEditComponent },
  { path: ':id/delete', component: TourDeleteComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TourRoutingModule { }
