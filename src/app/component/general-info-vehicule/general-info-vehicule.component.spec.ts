import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInfoVehiculeComponent } from './general-info-vehicule.component';

describe('GeneralInfoVehiculeComponent', () => {
  let component: GeneralInfoVehiculeComponent;
  let fixture: ComponentFixture<GeneralInfoVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInfoVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInfoVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
