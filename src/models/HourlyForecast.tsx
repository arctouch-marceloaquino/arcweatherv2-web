import Weather from './Weather';
import City from './City';
import { Coordinate } from './Types/Common';

export default class HourlyForecast {

    city: City;
    coord: Coordinate;
    code: number;
    message: number;
    list: Weather[];

    constructor(city:City, coord:Coordinate, code:number, message:number, list:Weather[])  {
        this.city = city;
        this.coord = coord;
        this.code = code;
        this.message = message;
        this.list = list;
    }
}
