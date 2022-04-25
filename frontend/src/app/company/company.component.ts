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

  constructor(private companyService: CompanyService) {}

  // Search content
  typed = '';
  display = '';

  onKey(event: any) { // without type info
    this.typed = event.target.value;
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.data = companies);
  }
  
}
