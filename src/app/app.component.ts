import {Component, OnInit} from '@angular/core';
import { APIService } from  './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private  hotels:  Array<object> = [];

  constructor(private  apiService:  APIService) { }

  ngOnInit() {
    this.getHotels();
  }

  public  getHotels(filter) {
    this.apiService.getHotels(filter).subscribe((data:  Array<object>) => {
      this.hotels  =  data;
    });
  }

  public filterName($event) {
    this.getHotels({name:$event});
  }

  public filterStar ($event) {
    this.getHotels($event);
  }

}
