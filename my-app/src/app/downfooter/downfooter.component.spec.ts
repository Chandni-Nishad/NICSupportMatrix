import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownfooterComponent } from './downfooter.component';

describe('DownfooterComponent', () => {
  let component: DownfooterComponent;
  let fixture: ComponentFixture<DownfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
