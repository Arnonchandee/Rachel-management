import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersManagmentComponent } from './workers-managment.component';

describe('WorkersManagmentComponent', () => {
  let component: WorkersManagmentComponent;
  let fixture: ComponentFixture<WorkersManagmentComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkersManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
