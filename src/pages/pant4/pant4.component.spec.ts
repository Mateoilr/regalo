import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pant4Component } from './pant4.component';

describe('Pant4Component', () => {
  let component: Pant4Component;
  let fixture: ComponentFixture<Pant4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pant4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pant4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
