import { Coordinate } from './Coordinate';
import { City } from './City';
import { Weather } from './Weather';

export class HourlyForecast {

    City: City;
    Coord: Coordinate;
    Code: number;
    Message: number;
    CNT: number;
    List: Weather[];
    
    /**
     * The purpose of this class is to represent the hourly weather forecast
     */
    constructor(city:City, coord:Coordinate, code:number, message:number, cnt:number, list:Weather[])  {
        this.City = city;
        this.Coord = coord;
        this.Code = code;
        this.Message = message;
        this.CNT = cnt;
        this.List = list;
    }
}