package backend

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/company/list"(controller: "Company", action: "HTTPRequest")

        "/company/list/$filter"(controller: "Company", action: "HTTPRequest")

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
