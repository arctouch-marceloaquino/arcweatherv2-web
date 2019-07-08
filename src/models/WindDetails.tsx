export class WindDetails {

    Speed: number;
    Deg: number;
    
    /**
     * The purpose of this class is to represent the details of a wind
     */
    constructor(speed: number, deg: number) {
        this.Speed = speed;
        this.Deg = deg;
    }
}