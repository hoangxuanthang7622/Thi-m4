import { Injectable } from '@angular/core';
import { Tour } from './tour';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TourService {
  store(tourData: Tour) {
    throw new Error('Method not implemented.');
  }
  tours: Tour[] = [];
  api_url:string = '';
  constructor(
    private http:HttpClient
  ) {
    this.api_url = environment.api_url
  }
  getAll():Observable<Tour[]>{
    return this.http.get<Tour[]>(this.api_url);
  }
  find(idx:any):Observable<Tour>{
    return this.http.get<Tour>(this.api_url+'/'+idx);
  }

  save(tour:Tour){
    return this.http.post<Tour>(this.api_url , tour);
  }
  update(id:number,tour:Tour){
    return this.http.put<Tour>(this.api_url + '/' + id, tour);
  }
  destroy(idx:number){
    return this.http.delete<Tour>(this.api_url + '/' + idx);
  }

}
