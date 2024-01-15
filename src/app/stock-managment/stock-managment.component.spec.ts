import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManagmentComponent } from './stock-managment.component';

describe('StockManagmentComponent', () => {
  let component: StockManagmentComponent;
  let fixture: ComponentFixture<StockManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
