import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  
  login(credentials) {
    return this.http.post(`${this.apiUrl}/auth/login`, 
      JSON.stringify(credentials), this.httpOptions)
      .pipe(map((response: any) => localStorage.setItem('token', response.access_token)));
  }

  logout() {
    localStorage.removeItem('token');
  }

  get isLoggedIn() : Observable<boolean> {
    const token: string = this.getToken();
    if (!token || new JwtHelperService().isTokenExpired(token)) {
      return of(false);
    }
    return of(true);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
