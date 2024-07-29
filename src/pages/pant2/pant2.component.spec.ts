import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pant2Component } from './pant2.component';


describe('Pant2Component', () => {
  let component: Pant2Component;
  let fixture: ComponentFixture<Pant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pant2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
