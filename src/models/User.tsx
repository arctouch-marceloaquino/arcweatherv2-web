export default class User {

    displayName: string;
    login: string;
    lastLogin: Date;

    constructor(displayName:string, login: string, lastLogin: Date) {
        this.displayName = displayName;
        this.login = login;
        this.lastLogin = lastLogin;
    }
}
