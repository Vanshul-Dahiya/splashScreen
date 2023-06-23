import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellingAllowanceComponent } from './travelling-allowance.component';

describe('TravellingAllowanceComponent', () => {
  let component: TravellingAllowanceComponent;
  let fixture: ComponentFixture<TravellingAllowanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravellingAllowanceComponent]
    });
    fixture = TestBed.createComponent(TravellingAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
