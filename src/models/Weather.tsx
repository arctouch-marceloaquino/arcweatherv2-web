import WeatherDetails from './WeatherDetails';
import MainWeatherDetails from './MainWeatherDetails';
import SystemInformation from './SystemInformation';
import { Coordinate, Wind } from './Types/Common';

export default class Weather {

    id: number;
    coord: Coordinate;
    weather: WeatherDetails[];
    mainWeatherDetails: MainWeatherDetails;
    wind: Wind;
    sysInformation: SystemInformation;
    timezone: number;
    name: string;
    code: number;
    dateTimeUtc: number;
    visibility: number;

    constructor(id: number, coord: Coordinate, weather: WeatherDetails[],
                mainWeatherDetails: MainWeatherDetails, wind: Wind, dateTimeUtc: number,
                sysInformation:SystemInformation, timezone:number, name:string, cod:number, visibility:number)  {
            this.id = id;
            this.coord = coord;
            this.weather = weather;
            this.dateTimeUtc = dateTimeUtc;
            this.mainWeatherDetails = mainWeatherDetails;
            this.wind = wind;
            this.sysInformation = sysInformation;
            this.timezone = timezone;
            this.name = name;
            this.code = cod;
            this.visibility = visibility;
    }
}
