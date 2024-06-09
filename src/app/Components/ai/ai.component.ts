import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AIComponent {
  users: { send: string, receive: string }[] = [];
  message: string = '';

  
  private apiUrl = 'http://localhost:5000/api/chat';

  constructor(private http: HttpClient) { }

  sendMessage(userInput: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { user_input: userInput });
  }

    }
  

