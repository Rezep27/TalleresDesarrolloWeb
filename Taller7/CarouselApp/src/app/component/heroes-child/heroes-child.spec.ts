import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesChild } from './heroes-child';

describe('HeroesChild', () => {
  let component: HeroesChild;
  let fixture: ComponentFixture<HeroesChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
