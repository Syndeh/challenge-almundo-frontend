import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  API_URL  =  'http://localhost:3000';

  constructor(private  httpClient:  HttpClient) {}

  getHotels(params){
    return  this.httpClient.get(`${this.API_URL}/hotels`,{ params: params });
  }
}
