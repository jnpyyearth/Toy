import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureModelComponent } from './figure-model.component';

describe('FigureModelComponent', () => {
  let component: FigureModelComponent;
  let fixture: ComponentFixture<FigureModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigureModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
