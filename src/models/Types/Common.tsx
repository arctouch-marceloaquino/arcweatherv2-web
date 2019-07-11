export type Coordinate = {
    lat: number;
    lon: number;
}

export type Wind = {
    speed: number;
    deg: number;
}

export enum TemperatureScale {
    Celsius,
    Fahrenheit
}