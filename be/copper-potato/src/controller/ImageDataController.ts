import { ImageData } from "../model/imageData";

export class ImageDataController {
    private imgArray: ImageData[];

    constructor() {
        this.imgArray = [];
    }

   public addImage(img: ImageData): void {
        this.imgArray.push(img);
   }

   public getImgArray(): ImageData[] {
    return this.imgArray;
   }
}