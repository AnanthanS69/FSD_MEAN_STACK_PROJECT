import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL="http://localhost:3000/api";
  // API_URL="/api";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(`$(this.API_URL)/getData`)
  }
}
