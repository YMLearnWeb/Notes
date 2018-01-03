import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollBannerComponent } from './scroll-banner/scroll-banner.component';
import { ViewBoxComponent } from './view-box/view-box.component';
import { GalleryService } from './gallery.service';
import { ScrollBannerParentComponent } from './scroll-banner-parent/scroll-banner-parent.component';
import { ViewBannerChildrenComponent } from './view-banner-children/view-banner-children.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollBannerComponent,
    ViewBoxComponent,
    ScrollBannerParentComponent,
    ViewBannerChildrenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
