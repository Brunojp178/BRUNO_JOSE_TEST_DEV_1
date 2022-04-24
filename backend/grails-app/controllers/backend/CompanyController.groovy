package backend

class CompanyController {

    def companyService
    static defaultAction = "listCompaniesT"

    // Render view with simple list
    def listCompanies() {
        def items = companyService.getCompanies()
        render view: "/companyController/listCompanies", model: [companies: items]
    }

    // Render view with a table
    def listCompaniesT() {
        def items = companyService.getCompanies()
        render view: "/companyController/listCompaniesT", model: [companies: items]
    }
}
