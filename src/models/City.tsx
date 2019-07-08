export default class City {

    id: number;
    name: string;
    coord: { lat: number, lon: number};
    country: string;
    
    constructor(id:number, name:string, coord: { lat: number, lon: number}, country:string) {
        this.id = id;
        this.name = name;
        this.coord = coord;
        this.country = country;
    }
}