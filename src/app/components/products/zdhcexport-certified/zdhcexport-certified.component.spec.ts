import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdhcexportCertifiedComponent } from './zdhcexport-certified.component';

describe('ZdhcexportCertifiedComponent', () => {
  let component: ZdhcexportCertifiedComponent;
  let fixture: ComponentFixture<ZdhcexportCertifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdhcexportCertifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdhcexportCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
