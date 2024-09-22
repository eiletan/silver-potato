package com.silverpotato;

import com.drew.lang.GeoLocation;
import com.drew.metadata.exif.GpsDirectory;
import com.silverpotato.model.ImageProcessor;

public class Main {

    public static void main(String[] args) {
        ImageProcessor oi = new ImageProcessor("");
        oi.readImages();
        GpsDirectory gpsDir = oi.getImages().get(0).getFirstDirectoryOfType(GpsDirectory.class);
        GeoLocation location = gpsDir.getGeoLocation();
        System.out.println(location);
    }
}
