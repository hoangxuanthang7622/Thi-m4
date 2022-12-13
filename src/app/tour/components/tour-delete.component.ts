import { Component } from '@angular/core';
import { Tour } from '../tour';
import { TourService } from '../tour.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-tour-delete',
  templateUrl: './../templates/tour-delete.component.html',
})
export class TourDeleteComponent {
  tour! : Tour;
  id:any = 0;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _TourService:TourService,
    private _Router: Router
  ) {}
  ngOnInit(){
    // goi phuong thuc all
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._TourService.find(id).subscribe(tour => {
       this.tour = tour;
      });
  });
  }
  handleDelete(id:any){
    this._TourService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['/tour']);
    }, (e: any) => {
      console.log(e);
    });
  }
}
