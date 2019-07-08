import { Observable } from "rxjs";
import Weather from "../models/Weather";
import ApiInfo from './ApiInfo';
import HourlyForecast from "../models/HourlyForecast";
import { HttpService } from "./HttpService";
import { Coordinate } from "../models/Types/Coordinate";


export class ApiService {
    private provider: HttpService;

    constructor() { 
      this.provider = new HttpService();
    }

    getCurrentWeatherByCityName(cityName: string): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?q=${cityName}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: Weather) => {
            observer.next(response);
          }
        );
      });
    }

    getCurrentWeatherById(cityId: number): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?id=${cityId}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: Weather) => {
            observer.next(response);
          }
        );
      });
    }

    getCurrentWeatherByCoordinates(coord: Coordinate): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: Weather) => {
            observer.next(response);
          }
        );
      });
    }

    getHourlyForecast(cityName:string): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?q=${cityName}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: HourlyForecast) => {
            observer.next(response);
          }
        );
      });
    }

    getHourlyForecastById(cityId:number): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?id=${cityId}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: HourlyForecast) => {
            observer.next(response);
          }
        );
      });
    }

    getHourlyForecastByCoordinates(coord:Coordinate): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?lat=${coord.lat}&lon=${coord.lon}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: HourlyForecast) => {
            observer.next(response);
          }
        );
      });
    }
}
