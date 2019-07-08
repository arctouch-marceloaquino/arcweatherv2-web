export class SystemInformation {

    Id: number;
    Main: string;
    Description: string;
    Icon: string;
    
    /**
     * The purpose of this class is to represent the details of the system
     */
    constructor(id: number, main:string, description:string, icon:string) {
        this.Id = id;
        this.Main = main;
        this.Description = description;
        this.Icon = icon;
    }
}