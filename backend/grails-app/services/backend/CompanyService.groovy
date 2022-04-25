package backend

import grails.gorm.transactions.Transactional

@Transactional
class CompanyService {

    @Transactional(readOnly = true)
    def getCompanies(String filter) {
        
        // if filter is empty, return entire list
        if(filter.equals("") || filter == null) {
            def content = Company.list()
            return content
        }

        // Return object filtering by name using ILike, ILike ignorecase of the name.
        def content = Company.findByNameIlike("%"+ filter +"%")
        return content
    }

    def saveCompany(String name, String segment){
        def company = new Company(name: name, segment: segment)
        company.save()
    }
}
