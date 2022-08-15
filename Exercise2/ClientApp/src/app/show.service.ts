import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }
  controllerEndpoint:string = "api/Shows"

  getShows():any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/getShows`)
  }

  getShowById(id:number):any{
    return this.http.get(`${this.baseUrl}${this.controllerEndpoint}/getShows/${id}`)
  }
}
