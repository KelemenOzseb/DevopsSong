import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFilter } from './more-filter';

describe('MoreFilter', () => {
  let component: MoreFilter;
  let fixture: ComponentFixture<MoreFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
