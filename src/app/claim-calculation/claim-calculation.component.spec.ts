import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCalculationComponent } from './claim-calculation.component';

describe('ClaimCalculationComponent', () => {
  let component: ClaimCalculationComponent;
  let fixture: ComponentFixture<ClaimCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimCalculationComponent]
    });
    fixture = TestBed.createComponent(ClaimCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
