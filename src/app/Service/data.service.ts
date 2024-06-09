import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

Data:any
  constructor( private http: HttpClient) { 
    this.http.get('https://forhackaton-5012c-default-rtdb.europe-west1.firebasedatabase.app/users.json').subscribe(data => {
this.Data=data
  })
}

}
