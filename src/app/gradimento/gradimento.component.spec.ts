import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradimentoComponent } from './gradimento.component';

describe('GradimentoComponent', () => {
  let component: GradimentoComponent;
  let fixture: ComponentFixture<GradimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
