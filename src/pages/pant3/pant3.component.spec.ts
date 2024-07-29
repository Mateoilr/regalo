import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pant3Component } from './pant3.component';

describe('Pant3Component', () => {
  let component: Pant3Component;
  let fixture: ComponentFixture<Pant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pant3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
