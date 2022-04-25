import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company} from './company';
 
@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private companiesURL = 'http://localhost:8080/company/list';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) {}

  /** GET heroes from the server */
  getCompanies(filter: String): Observable<Company[]> {
    if (filter == "" || filter == null || filter == " ") return this.http.get<Company[]>(this.companiesURL)

    return this.http.get<Company[]>(this.companiesURL + "/" + filter)
  }

  getSingleCompany(filter: String): Observable<Company> {
    return this.http.get<Company>(this.companiesURL + "/" + filter)
  }
  
}
