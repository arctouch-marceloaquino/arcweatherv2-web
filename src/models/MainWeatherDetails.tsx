export class MainWeatherDetails {

    Temp: number;
    Pressure: number;
    Humidity: number;
    Temp_min: number;
    Temp_max: number;
    Sea_level: number;
    Grnd_level: number;
    Temp_kf: number;
    
    /**
     * The purpose of this class is to represent the details of a main weather
     */
    constructor(temp: number, pressure: number, humidity:number, temp_min:number, 
                temp_max: number, sea_level: number, grnd_level:number, temp_kf:number) {
        this.Temp = temp;
        this.Pressure = pressure;
        this.Humidity = humidity;
        this.Temp_min = temp_min;
        this.Temp_max = temp_max;
        this.Sea_level = sea_level;
        this.Grnd_level = grnd_level;
        this.Temp_kf = temp_kf;
    }
}