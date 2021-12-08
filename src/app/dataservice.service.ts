import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 

  constructor(private http: HttpClient) { 
    
  }

  getData(baseUrl: any){
    return this.http.get(baseUrl)
    
  }
}
