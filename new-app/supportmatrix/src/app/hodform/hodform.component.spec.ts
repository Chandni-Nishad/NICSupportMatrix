import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodformComponent } from './hodform.component';

describe('HodformComponent', () => {
  let component: HodformComponent;
  let fixture: ComponentFixture<HodformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HodformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
