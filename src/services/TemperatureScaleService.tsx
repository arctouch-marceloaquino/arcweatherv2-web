import { TemperatureScale } from "../models/Types/Common";

export default class TemperatureScaleService {

    public getSelectedTemperature() {
        return localStorage.getItem('temperatureScale');
    }

    public setSelectedTemperature(temperatureScale: TemperatureScale) {
        localStorage.setItem('temperatureScale', temperatureScale.toString());
    }
}