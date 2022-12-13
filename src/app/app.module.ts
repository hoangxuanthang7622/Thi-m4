import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourRoutingModule } from './tour/tour-routing.module';
import { TourModule } from './tour/tour.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TourRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    TourModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
