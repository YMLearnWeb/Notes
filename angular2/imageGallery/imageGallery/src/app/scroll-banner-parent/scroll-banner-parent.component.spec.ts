import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBannerParentComponent } from './scroll-banner-parent.component';

describe('ScrollBannerParentComponent', () => {
  let component: ScrollBannerParentComponent;
  let fixture: ComponentFixture<ScrollBannerParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBannerParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBannerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
