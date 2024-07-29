import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pant1Component } from './pant1.component';

describe('Pant1Component', () => {
  let component: Pant1Component;
  let fixture: ComponentFixture<Pant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pant1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
