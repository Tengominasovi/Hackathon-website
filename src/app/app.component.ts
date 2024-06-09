import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from './Service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected property name
})
export class AppComponent {
  title = 'oldang';

  // constructor( private SData:DataService) {
  //   console.log(SData);
  // }


   
  
}
