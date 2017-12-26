/*
  use the service to apply component communication
*/
import { Component, Injectable, OnInit } from '@angular/core';
import { GalleryService } from './../gallery.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.css']
})
export class ViewBoxComponent implements OnInit {
  curImage;
  constructor(private galleryService:GalleryService) {
    this.galleryService.selImage$
                      .subscribe(img => this.curImage = img);
  }
  preImage(curImage){
    this.galleryService.prevImage(curImage);
  }
  nextImage(curImage){
    this.galleryService.nextImage(curImage)
  }
  ngOnInit() {

  }
}
