import { Coordinate } from "./Coordinate";

export class City {

    Id: number;
    Name: string;
    Coord: Coordinate;
    Country: string;
    
    /**
     * The purpose of this class is to represent the city 
     */
    constructor(id:number, name:string, coord: Coordinate, country:string) {
        this.Id = id;
        this.Name = name;
        this.Coord = coord;
        this.Country = country;
    }
}