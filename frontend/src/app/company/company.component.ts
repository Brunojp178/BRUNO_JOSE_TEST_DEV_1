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

  candidate = 'Bruno José';
  response: Company[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.response = companies);
  }
  
}
