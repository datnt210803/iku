import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardUserComponent;
  let fixture: ComponentFixture<DashboardUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardUserComponent]
    });
    fixture = TestBed.createComponent(DashboardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
