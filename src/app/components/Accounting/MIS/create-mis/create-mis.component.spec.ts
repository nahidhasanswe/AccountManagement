import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMisComponent } from './create-mis.component';

describe('CreateMisComponent', () => {
  let component: CreateMisComponent;
  let fixture: ComponentFixture<CreateMisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
