import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODLonginComponent } from './hodlongin.component';

describe('HODLonginComponent', () => {
  let component: HODLonginComponent;
  let fixture: ComponentFixture<HODLonginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HODLonginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HODLonginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
