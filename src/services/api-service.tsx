import { IProvider } from "../interfaces/iprovider";
import { Observable } from "rxjs";
import { Weather } from "../models/Weather";
import { ApiInfo } from './api-info';
import { Coordinate } from "../models/Coordinate";
import { HourlyForecast } from "../models/HourlyForecast";

export class ApiService {

    ApiInfo: ApiInfo = new ApiInfo();

    constructor(private provider: IProvider) { }
  
    getCurrentWeather(cityName: string): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?q=${cityName}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    getCurrentWeatherById(cityId: number): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?id=${cityId}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    getCurrentWeatherByCoordinates(coord: Coordinate): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?lat=${coord.Lat}&lon=${coord.Lon}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    getHourlyForecast(cityName:string): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?q=${cityName}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    getHourlyForecastById(cityId:number): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?id=${cityId}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    getHourlyForecastByCoordinates(coord:Coordinate): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?lat=${coord.Lat}&lon=${coord.Lon}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }
}