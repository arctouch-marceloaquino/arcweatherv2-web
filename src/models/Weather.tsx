import WeatherDetails from './WeatherDetails';
import MainWeatherDetails from './MainWeatherDetails';
import WindDetails from './WindDetails';
import SystemInformation from './SystemInformation';

export default class Weather {

    id: number;
    coord: { lat: number, lon: number};
    weather: WeatherDetails[];
    base: string;
    main: MainWeatherDetails;
    wind: WindDetails;
    clouds: { all: number };
    dt: number;
    sys: SystemInformation;
    timezone: number;
    name: string;
    code: number;
    visibility: number;

    constructor(id: number, coord: { lat: number, lon: number},weather: WeatherDetails[], base: string, 
                main: MainWeatherDetails, wind: WindDetails,clouds: { all: number }, dt:number, 
                sys:SystemInformation, timezone:number, name:string, cod:number, visibility:number)  {
            this.id = id;
            this.coord = coord;
            this.weather = weather;
            this.base = base;
            this.main = main;
            this.wind = wind;
            this.clouds = clouds;
            this.dt = dt;
            this.sys = sys;
            this.timezone = timezone;
            this.name = name;
            this.code = cod;
            this.visibility = visibility;
    }
}