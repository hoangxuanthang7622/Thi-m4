import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { Tour } from '../tour';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tour-add',
  templateUrl: './../templates/tour-add.component.html',
})
export class TourAddComponent {
  tour!:Tour;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _TourService:TourService,
    private _Router: Router
  ) {}
  handleSubmit(value:any):void {
    let tourData:Tour = {
      name: value.name,
      price: value.price,
      description: value.description,
    }
    this._TourService.save( tourData).subscribe(() => {
      this._Router.navigate(['/tour']);
    }, (e: any) => {
      console.log(e);
    });
    this._Router.navigate(['/']);
  }
}
