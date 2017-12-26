import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollBannerComponent } from './scroll-banner/scroll-banner.component';
import { ViewBoxComponent } from './view-box/view-box.component';
import { GalleryService } from './gallery.service';

@NgModule({
  declarations: [
    AppComponent,
    ScrollBannerComponent,
    ViewBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
