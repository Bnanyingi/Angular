import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTemListComponent } from './budget-tem-list.component';

describe('BudgetTemListComponent', () => {
  let component: BudgetTemListComponent;
  let fixture: ComponentFixture<BudgetTemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetTemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
