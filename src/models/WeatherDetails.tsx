export default class WeatherDetails {

    id: number;
    main: string;
    description: string;
    icon: string;

    constructor(id: number, main:string, description:string, icon:string) {
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }
}