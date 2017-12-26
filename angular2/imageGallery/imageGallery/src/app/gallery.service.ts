/*
  use the service to apply component communication
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GalleryService {
  _images = [];
  //observable
  private selImage = new Subject();
  selImage$ = this.selImage.asObservable();

  constructor() { };
  loadImages(images){
    this._images = images;
    this.selImage.next(this._images[2]);
    return this._images;
  }
  selectImage(image){
    if(image){
      this.selImage.next(image);
    }else {
      this.selImage.next(this._images[0]);
    }
  }
  prevImage(image){
    let thisImages = this._images;
    for(let i=0; i<thisImages.length;i++){
      if(thisImages[i] === image ){
        if(i===0){
            this.selImage.next(thisImages[thisImages.length-1]);
        }else{
            this.selImage.next(thisImages[i-1]);
        }
      }
    }
  }
  nextImage(image){
    let thisImages = this._images;
    for(let i=0; i<thisImages.length;i++){
      if(thisImages[i] === image ){
        if(i===(thisImages.length - 1)){
            this.selImage.next(thisImages[0]);
        }else{
            this.selImage.next(thisImages[i+1]);
        }
      }
    }
  }
}
