import { Coordinate } from "./Types/Common";

export default class City {

    id: number;
    name: string;
    coordinate: Coordinate;
    country: string;
    
    constructor(id:number, name:string, coordinate: Coordinate, country:string) {
        this.id = id;
        this.name = name;
        this.coordinate = coordinate;
        this.country = country;
    }
}
