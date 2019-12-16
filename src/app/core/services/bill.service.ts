import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../models/bill';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  private apiUrl = environment.apiUrl;
  private httpOptions = { 
    headers: new HttpHeaders(
      { 
        'Authorization': `Bearer ${this.authService.getToken()}` 
      }
    ) 
  };

  getBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiUrl}/api/bills`, this.httpOptions)
      .pipe(
        map(res => {console.log('hello', res); return res })
      );
  }
}
