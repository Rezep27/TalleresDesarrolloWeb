import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChildLinks } from './header-child-links';

describe('HeaderChildLinks', () => {
  let component: HeaderChildLinks;
  let fixture: ComponentFixture<HeaderChildLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderChildLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderChildLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
