import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgenpedComponent } from './formgenped.component';

describe('FormgenpedComponent', () => {
  let component: FormgenpedComponent;
  let fixture: ComponentFixture<FormgenpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgenpedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgenpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
