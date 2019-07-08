export class Coordinate {

    Lon: number;
    Lat: number;
    
    /**
     * The purpose of this class is to represent the coordinates 
     * that represents the current city
     */
    constructor(lon: number, lat:number) {
        this.Lon = lon;
        this.Lat = lat;
    }
}