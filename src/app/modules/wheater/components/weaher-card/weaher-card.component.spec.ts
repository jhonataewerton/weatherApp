import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaherCardComponent } from './weaher-card.component';

describe('WeaherCardComponent', () => {
  let component: WeaherCardComponent;
  let fixture: ComponentFixture<WeaherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaherCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
