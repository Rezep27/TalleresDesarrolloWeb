import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCardsChild } from './information-cards-child';

describe('InformationCardsChild', () => {
  let component: InformationCardsChild;
  let fixture: ComponentFixture<InformationCardsChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationCardsChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationCardsChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
