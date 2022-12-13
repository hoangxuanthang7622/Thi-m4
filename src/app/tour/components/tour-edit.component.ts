import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { Tour } from '../tour';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tour-edit',
  templateUrl: './../templates/tour-edit.component.html',
})
export class TourEditComponent {
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

          name: new FormControl(this.tour.name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          price: new FormControl(this.tour.price,[
            Validators.required,
            Validators.minLength(3)
          ]),
          description: new FormControl(this.tour.description,[
            Validators.required,
            Validators.minLength(3)
          ]),
        });
      });
    });
  }
  handleSubmit():void{
    let tourData:Tour = {
      name: this.tourForm.value.name,
      price: this.tourForm.value.price,
      description: this.tourForm.value.description,
    }
    this._TourService.update(this.id, tourData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/tour']);
    }, (e: any) => {
      console.log(e);
    });
    this._Router.navigate(['/']);

  }
}
