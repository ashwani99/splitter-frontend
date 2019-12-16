import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  register(payload) {
    return this.http.post(`${this.apiUrl}/api/users`,
      JSON.stringify(payload), this.httpOptions);
  }
}
