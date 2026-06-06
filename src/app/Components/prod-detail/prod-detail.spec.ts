import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetail } from './prod-detail';

describe('ProdDetail', () => {
  let component: ProdDetail;
  let fixture: ComponentFixture<ProdDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
