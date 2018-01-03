import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBannerChildrenComponent } from './view-banner-children.component';

describe('ViewBannerChildrenComponent', () => {
  let component: ViewBannerChildrenComponent;
  let fixture: ComponentFixture<ViewBannerChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBannerChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBannerChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
