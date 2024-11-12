import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingAuxillariesComponent } from './dyeing-auxillaries.component';

describe('DyeingAuxillariesComponent', () => {
  let component: DyeingAuxillariesComponent;
  let fixture: ComponentFixture<DyeingAuxillariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyeingAuxillariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyeingAuxillariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
