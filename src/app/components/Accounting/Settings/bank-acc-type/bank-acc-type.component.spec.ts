import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccTypeComponent } from './bank-acc-type.component';

describe('BankAccTypeComponent', () => {
  let component: BankAccTypeComponent;
  let fixture: ComponentFixture<BankAccTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
