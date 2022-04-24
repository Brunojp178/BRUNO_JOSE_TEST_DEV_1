package backend

import grails.gorm.transactions.Transactional

@Transactional
class CompanyService {

    @Transactional(readOnly = true)
    def getCompanies() {
        Company.list()
    }

    def saveCompany(String name, String segment){
        def company = new Company(name: name, segment: segment)
        company.save()
    }
}
