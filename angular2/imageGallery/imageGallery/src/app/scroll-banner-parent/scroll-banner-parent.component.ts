import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-banner-parent',
  templateUrl: './scroll-banner-parent.component.html',
  styleUrls: ['./scroll-banner-parent.component.css']
})
export class ScrollBannerParentComponent implements OnInit {

  constructor() { }
  imageList;
  curImages = "1.jpg";
  selectImage(image){
    this.curImages = image;
  }
  ngOnInit() {
      let list = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
      this.imageList = list;
  }

}
