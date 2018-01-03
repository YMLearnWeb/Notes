import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-banner-children',
  templateUrl: './view-banner-children.component.html',
  styleUrls: ['./view-banner-children.component.css']
})
export class ViewBannerChildrenComponent {
  @Input() curImage;
}
