import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticOrientedComponent } from './domestic-oriented.component';

describe('DomesticOrientedComponent', () => {
  let component: DomesticOrientedComponent;
  let fixture: ComponentFixture<DomesticOrientedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticOrientedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticOrientedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
