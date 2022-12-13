import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { Tour } from '../tour';
@Component({
  selector: 'app-tours',
  templateUrl: './../templates/tours.component.html',
})
export class ToursComponent {
  tours:Tour[] = [];
  constructor(
    private _TourService:TourService
  ) { }
  ngOnInit(): void {
    this._TourService.getAll().subscribe(tours => {
      this.tours = tours;
    });
    console.log(this.tours);
  }
}
