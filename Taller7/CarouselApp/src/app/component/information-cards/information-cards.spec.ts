import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCards } from './information-cards';

describe('InformationCards', () => {
  let component: InformationCards;
  let fixture: ComponentFixture<InformationCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
