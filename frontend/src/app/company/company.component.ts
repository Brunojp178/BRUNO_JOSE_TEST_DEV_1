import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class CompanyComponent implements OnInit{
  title = 'Frontend';

  // Holds the response from the HTTPS request
  data: Company[] = [];
  singleData;
  
  constructor(private companyService: CompanyService) {}

  // Search content
  typed = '';

  // TODO Filter the json response using the input from the search input
  display = '';

  onKey(event: any) { // without type info
    this.typed = event.target.value;
  }

  onClickMe(){
    this.getSingleCompany(this.typed);
  }

  ngOnInit(): void {
    this.getCompanies();
    
    this.getSingleCompany("");
  }

  getCompanies(): void {
    this.companyService.getCompanies(null).subscribe(companies => this.data = companies);
  }

  getSingleCompany(filter: String): void{
    this.companyService.getCompanies(filter).subscribe(companies => this.singleData = companies);
  }
  
}
