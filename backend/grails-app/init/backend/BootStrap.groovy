package backend

class BootStrap {

    def companyService

    def init = { servletContext ->
        
        companyService.saveCompany("Nissan", "Vehicles")
        companyService.saveCompany("Toyota", "Vehicles")
        companyService.saveCompany("Nestle", "Food")
        
    }
    def destroy = {
    }
}
