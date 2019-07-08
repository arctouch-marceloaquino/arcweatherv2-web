import Weather from './Weather';
import City from './City';

export default class HourlyForecast {

    city: City;
    coord: { lat: number, lon: number};
    code: number;
    message: number;
    cnt: number;
    list: Weather[];

    constructor(city:City, coord:{ lat: number, lon: number}, code:number, message:number, cnt:number, list:Weather[])  {
        this.city = city;
        this.coord = coord;
        this.code = code;
        this.message = message;
        this.cnt = cnt;
        this.list = list;
    }
}