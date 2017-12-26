/*
  use the service to apply component communication
*/
import { Component, OnInit } from '@angular/core';
import { GalleryService } from './../gallery.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-scroll-banner',
  templateUrl: './scroll-banner.component.html',
  styleUrls: ['./scroll-banner.component.css']
})
export class ScrollBannerComponent implements OnInit {
  imageList = [];
  curSelect;
  selectImage(image){
    this.galleryService.selectImage(image);
    this.curSelect = image;
  }
  constructor(private galleryService:GalleryService) {}


  ngOnInit() {
    let list = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
    this.curSelect = list[2];
    this.imageList = this.galleryService.loadImages(list);
  }
}
