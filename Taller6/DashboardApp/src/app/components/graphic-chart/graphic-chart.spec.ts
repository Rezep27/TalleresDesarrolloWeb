import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicChart } from './graphic-chart';

describe('GraphicChart', () => {
  let component: GraphicChart;
  let fixture: ComponentFixture<GraphicChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
