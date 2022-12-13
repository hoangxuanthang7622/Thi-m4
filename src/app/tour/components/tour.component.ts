import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Tour } from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './../templates//tour.component.html',
})
export class TourComponent {
    tourForm!: FormGroup;
    id:any;
    tour!:Tour;
    constructor(
      private _ActivatedRoute:ActivatedRoute,
      private _TourService:TourService,
      private _Router: Router
    ) {}
    ngOnInit(): void {

      //lay id tu url xuong
      this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');
        this.id = id;
        this._TourService.find(id).subscribe(tour => {
          this.tour = tour;
          console.log(this.tour.name);
          this.tourForm = new FormGroup({
            name: new FormControl(this.tour.name),
            price: new FormControl(this.tour.price),
            description: new FormControl(this.tour.description),
          });
        });


      });
    }

}
