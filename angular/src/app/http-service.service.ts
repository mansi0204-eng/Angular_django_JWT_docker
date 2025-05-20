import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }

  get(endpoint: any, callback: any) {
    return this.httpClient.get(endpoint).subscribe((data: any) => {
      callback(data)
    })
  }

  post(endpoint: any, bean: any, callback: any) {
    return this.httpClient.post(endpoint, bean).subscribe((data: any) => {
      callback(data)
    })
  }
}