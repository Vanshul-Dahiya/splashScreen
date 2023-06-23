import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingListPageComponent } from './pending-list-page.component';

describe('PendingListPageComponent', () => {
  let component: PendingListPageComponent;
  let fixture: ComponentFixture<PendingListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingListPageComponent]
    });
    fixture = TestBed.createComponent(PendingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
