package com.silverpotato.model;

public class Image {
    private String name;
    private float latitude;
    private float longitude;
    private String city;
    private String country;
    private String locationName;

    public Image(String name, float lat, float lng) {
        this.name = name;
        this.latitude = lat;
        this.longitude = lng;
    }

    public String getName() {
        return name;
    }

    public float getLatitude() {
        return latitude;
    }

    public float getLongitude() {
        return longitude;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }
}
