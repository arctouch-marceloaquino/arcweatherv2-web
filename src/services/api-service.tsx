import { IProvider } from "../interfaces/iprovider";
import { Observable } from "rxjs";
import { Weather } from "../models/Weather";
import { ApiInfo } from './api-info';
import { Coordinate } from "../models/Coordinate";
import { HourlyForecast } from "../models/HourlyForecast";
/*
  The purpose of this class is to be the main point of API consume.
  This class will be used as the Service that is allowed to request using REST to OpenWeather API
 */
export class ApiService {

    ApiInfo: ApiInfo = new ApiInfo();

    constructor(private provider: IProvider) { }
  
    /**
     * This method returns the weather for the given city
     * @param cityName Name of the city
     */
    getCurrentWeather(cityName: string): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?q=${cityName}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the weather for the given city
     * @param cityId Id of the city
     */
    getCurrentWeatherById(cityId: number): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?id=${cityId}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the weather for the given city
     * @param coord coordinates of the city
     */
    getCurrentWeatherByCoordinates(coord: Coordinate): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?lat=${coord.Lat}&lon=${coord.Lon}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the hourly forecast for the given city
     * @param cityName Name of the city
     */
    getHourlyForecast(cityName:string): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?q=${cityName}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the hourly forecast for the given city
     * @param cityId Id of the city
     */
    getHourlyForecastById(cityId:number): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?id=${cityId}&appid=${this.ApiInfo.API_KEY}`).subscribe(
          response => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the hourly forecast for the given city
     * @param coord coordinates of the city
     */
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