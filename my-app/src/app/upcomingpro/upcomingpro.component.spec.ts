import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingproComponent } from './upcomingpro.component';

describe('UpcomingproComponent', () => {
  let component: UpcomingproComponent;
  let fixture: ComponentFixture<UpcomingproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
