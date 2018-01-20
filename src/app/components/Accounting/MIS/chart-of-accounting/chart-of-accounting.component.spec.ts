import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountingComponent } from './chart-of-accounting.component';

describe('ChartOfAccountingComponent', () => {
  let component: ChartOfAccountingComponent;
  let fixture: ComponentFixture<ChartOfAccountingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartOfAccountingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
