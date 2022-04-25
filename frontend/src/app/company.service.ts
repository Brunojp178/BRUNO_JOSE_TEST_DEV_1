import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Company} from './company';
 
@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private companiesURL = 'http://localhost:8080/company/list.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}

  /** GET heroes from the server */
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesURL)
  }
  
}
