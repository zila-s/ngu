import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTComponent } from './scroll-t.component';

describe('ScrollTComponent', () => {
  let component: ScrollTComponent;
  let fixture: ComponentFixture<ScrollTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollTComponent]
    });
    fixture = TestBed.createComponent(ScrollTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
