import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutthewebsiteComponent } from './aboutthewebsite.component';

describe('AboutthewebsiteComponent', () => {
  let component: AboutthewebsiteComponent;
  let fixture: ComponentFixture<AboutthewebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutthewebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutthewebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
