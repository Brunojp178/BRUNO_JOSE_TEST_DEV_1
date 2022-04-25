package backend
import grails.converters.JSON

class CompanyController {

    def companyService
    static defaultAction = "listCompanies"

    // Render view with simple list
    def listCompanies() {
        def items = companyService.getCompanies("")
        render view: "/companyController/listCompanies", model: [companies: items]
    }

    // Render view with a table
    def listCompaniesT() {
        def items = companyService.getCompanies("")
        render view: "/companyController/listCompaniesT", model: [companies: items]
    }

    def HTTPRequest(){
        def items = companyService.getCompanies(params.filter)
        respond items, formats:['json']
    }
}
