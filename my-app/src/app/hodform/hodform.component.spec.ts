import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HODFormComponent } from './hodform.component';

describe('HODFormComponent', () => {
  let component: HODFormComponent;
  let fixture: ComponentFixture<HODFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HODFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HODFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
