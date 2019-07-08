import { Observable } from "rxjs";
import Weather from "../models/Weather";
import ApiInfo from './ApiInfo';
import HourlyForecast from "../models/HourlyForecast";
import { HttpService } from "./HttpService";
/*
  The purpose of this class is to be the main point of API consume.
  This class will be used as the Service that is allowed to request using REST to OpenWeather API
 */
export class ApiService {
    private provider: HttpService;

    constructor() { 
      this.provider = new HttpService();
    }
  
    /**
     * This method returns the weather for the given city
     * @param cityName Name of the city
     */
    getCurrentWeather(cityName: string): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?q=${cityName}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: Weather) => {
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
        this.provider.get(`/weather?id=${cityId}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: Weather) => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the weather for the given coordinate
     * @param coord coordinate
     */
    getCurrentWeatherByCoordinates(coord: { lat: number, lon: number}): Observable<Weather> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: Weather) => {
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
        this.provider.get(`/forecast/hourly?q=${cityName}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: HourlyForecast) => {
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
        this.provider.get(`/forecast/hourly?id=${cityId}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: HourlyForecast) => {
            observer.next(response);
          }
        );
      });
    }

    /**
     * This method returns the hourly forecast for the given coordinate
     * @param coord coordinate
     */
    getHourlyForecastByCoordinates(coord:{ lat: number, lon: number}): Observable<HourlyForecast> {
      return Observable.create((observer: { next: (arg0: any) => void; }) => {
        this.provider.get(`/forecast/hourly?lat=${coord.lat}&lon=${coord.lon}&appid=${ApiInfo.API_KEY}`).subscribe(
          (response: HourlyForecast) => {
            observer.next(response);
          }
        );
      });
    }
}