package com.silverpotato.model;

import com.drew.imaging.ImageMetadataReader;
import com.drew.imaging.ImageProcessingException;
import com.drew.metadata.Metadata;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ImageProcessor {
    private String dir;
    private ArrayList<Metadata> images = new ArrayList<>();
    private List<String> fileFormats = Arrays.asList("jpg","jpeg","png");
    private FilenameFilter filter;

    public ImageProcessor(String directory) {
        this.dir = directory;
        this.filter = new FilenameFilter() {
            public boolean accept(File f, String name) {
                String lower = name.toLowerCase();
                String ext = lower.substring(lower.lastIndexOf(".")+1);
                return fileFormats.contains(ext);
            }
        };
    }

//    public ArrayList<String> getFileNamesInDirectory() {
//
//    }
    //

    public void readImages() {
        File folder = new File(this.dir);
        File[] listOfFiles = folder.listFiles(this.filter);
        if (listOfFiles != null) {
            for (int i = 0; i < listOfFiles.length; i++) {
                if (listOfFiles[i].isFile()) {
                    try {
                        Metadata imgMetadata = ImageMetadataReader.readMetadata(listOfFiles[i]);
                        images.add(imgMetadata);
                    } catch (ImageProcessingException ie) {
                        System.out.println("Error reading file, skipping");
                        System.out.println(ie);
                    } catch (IOException ioe) {
                        System.out.println("Error reading file, skipping");
                        System.out.println(ioe);
                    }

                }
            }
        }
    }

    public ArrayList<Metadata> getImages() {
        return images;
    }
}
