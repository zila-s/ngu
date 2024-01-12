import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTrainingComponent } from './css-training.component';

describe('CssTrainingComponent', () => {
  let component: CssTrainingComponent;
  let fixture: ComponentFixture<CssTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssTrainingComponent]
    });
    fixture = TestBed.createComponent(CssTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
