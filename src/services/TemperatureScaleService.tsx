export default class TemperatureScaleService {

    public getSelectedTemperature() {
        return localStorage.getItem('temperatureScale');
    }

    public setSelectedTemperature(temperatureScale: 'C' | 'F') {
        localStorage.setItem('temperatureScale', temperatureScale);
    }
}