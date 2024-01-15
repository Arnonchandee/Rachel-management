import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessRequirementsComponent } from './process-requirements.component';


describe('ProcessRequirementsComponent', () => {
  let component: ProcessRequirementsComponent;
  let fixture: ComponentFixture<ProcessRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessRequirementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
