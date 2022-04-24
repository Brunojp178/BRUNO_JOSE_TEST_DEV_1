package backend

class Company {

    String name
    String segment

    static constraints = {
        name maxSize: 255, nullable: false
        segment maxSize: 255, nullable: false
    }

    String toString(){
        return "{ Nome: " + name + "; Segmento: " + segment + " }"
    }
}
