export class ImageData {
    private latitude: number;
    private longitude: number;
    private locationName: string;
    private cityName: string;
    private countryName: string;
    private countryCode: string;

    constructor(latitude: number, longitude: number, locationName: string, cityName: string, countryName: string, countryCode: string) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.locationName = locationName;
        this.cityName = cityName;
        this.countryName = countryName;
        this.countryCode = countryCode;
    }

    public getLatitude(): number {
        return this.latitude;
    }

    public getLongitude(): number {
        return this.longitude;
    }

    public getLocationName(): string {
        return this.locationName;
    }

    public getCityName(): string {
        return this.cityName;
    }

    public getCountryName(): string {
        return this.countryName;
    }

    public getCountryCode(): string {
        return this.countryCode;
    }
}