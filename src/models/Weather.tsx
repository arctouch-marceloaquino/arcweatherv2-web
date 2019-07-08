import { Coordinate } from './Coordinate'
import { WeatherDetails } from './WeatherDetails';
import { MainWeatherDetails } from './MainWeatherDetails';
import { WindDetails } from './WindDetails';
import { CloudsDetails } from './CloudsDetails';
import { SystemInformation } from './SystemInformation';

export class Weather {

    Id: number;
    Coord: Coordinate;
    Weather: WeatherDetails[];
    Base: string;
    Main: MainWeatherDetails;
    Wind: WindDetails;
    Clouds: CloudsDetails;
    DT: number;
    Sys: SystemInformation;
    Timezone: number;
    Name: string;
    Cod: number;
    Visibility: number;
    
    /**
     * The purpose of this class is to represent the current weather
     */
    constructor(id: number, coord: Coordinate,weather: WeatherDetails[], base: string, 
                main: MainWeatherDetails, wind: WindDetails,clouds: CloudsDetails, dt:number, 
                sys:SystemInformation, timezone:number, name:string, cod:number, visibility:number)  {
            this.Id = id;
            this.Coord = coord;
            this.Weather = weather;
            this.Base = base;
            this.Main = main;
            this.Wind = wind;
            this.Clouds = clouds;
            this.DT = dt;
            this.Sys = sys;
            this.Timezone = timezone;
            this.Name = name;
            this.Cod = cod;
            this.Visibility = visibility;
    }
}