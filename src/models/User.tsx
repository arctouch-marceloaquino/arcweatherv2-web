export class User {

    DisplayName: string;
    Login: string;
    LastLogin: Date;
    
    /**
     * The purpose of this class is to represent the person 
     * that are using the system (a.k.a User)
     */
    constructor(displayName:string, login: string, lastLogin: Date) {
        this.DisplayName = displayName;
        this.Login = login;
        this.LastLogin = lastLogin;
    }
}