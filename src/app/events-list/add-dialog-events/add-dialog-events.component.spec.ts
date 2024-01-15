import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDialogEventsComponent } from './add-dialog-events.component';

describe('AddDialogEventsComponent', () => {
  let component: AddDialogEventsComponent;
  let fixture: ComponentFixture<AddDialogEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDialogEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDialogEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
