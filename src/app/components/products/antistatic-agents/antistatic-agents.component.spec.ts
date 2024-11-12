import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntistaticAgentsComponent } from './antistatic-agents.component';

describe('AntistaticAgentsComponent', () => {
  let component: AntistaticAgentsComponent;
  let fixture: ComponentFixture<AntistaticAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntistaticAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntistaticAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
