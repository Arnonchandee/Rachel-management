import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePresetComponent } from './table-preset.component';

describe('TablePresetComponent', () => {
  let component: TablePresetComponent;
  let fixture: ComponentFixture<TablePresetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePresetComponent]
    });
    fixture = TestBed.createComponent(TablePresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
