import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStatmentComponent } from './income-statment.component';

describe('IncomeStatmentComponent', () => {
  let component: IncomeStatmentComponent;
  let fixture: ComponentFixture<IncomeStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
