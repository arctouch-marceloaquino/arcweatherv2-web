export default class MainWeatherDetails {

    temperature: number;
    pressure: number;
    humidity: number;
    temperatureMin: number;
    temperatureMax: number;

    constructor(temperature: number, pressure: number, humidity:number, temperatureMin:number, temperatureMax: number) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.temperatureMin = temperatureMin;
        this.temperatureMax = temperatureMax;
    }
}
