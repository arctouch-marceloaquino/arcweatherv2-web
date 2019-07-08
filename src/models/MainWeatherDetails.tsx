export default class MainWeatherDetails {

    temp: number;
    pressure: number;
    humidity: number;
    tempMin: number;
    tempMax: number;
    seaLevel: number;
    grndLevel: number;
    tempKf: number;

    constructor(temp: number, pressure: number, humidity:number, tempMin:number, 
                tempMax: number, seaLevel: number, grndLevel:number, tempKf:number) {
        this.temp = temp;
        this.pressure = pressure;
        this.humidity = humidity;
        this.tempMin = tempMin;
        this.tempMax = tempMax;
        this.seaLevel = seaLevel;
        this.grndLevel = grndLevel;
        this.tempKf = tempKf;
    }
}