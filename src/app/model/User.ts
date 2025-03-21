export class LoginModel{
    username: string;
    password: string

    constructor(){
        this.username = ""
        this.password = ""
    }
}

export class RegisterModel{
    firstname: string;
    lastname: string;
    username: string;
    address: string;
    email: string;
    contact: number
    profilephoto: string;
    gender: string;
    jobtitle: string;
    yearsofexperience: number;
    role: string;
    password: string;

    constructor(){
        this.firstname = ""
        this.lastname = ""
        this.username = ""
        this.address = ""
        this.email = ""
        this.contact = 0
        this.profilephoto = ""
        this.gender = ""
        this.jobtitle = ""
        this.yearsofexperience = 0
        this.role = ""
        this.password = ""
    }
}