import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReportventaComponent } from './form-reportventa.component';

describe('FormReportventaComponent', () => {
  let component: FormReportventaComponent;
  let fixture: ComponentFixture<FormReportventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReportventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReportventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
