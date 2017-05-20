import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderVehiculeComponent } from './header-vehicule.component';

describe('HeaderVehiculeComponent', () => {
  let component: HeaderVehiculeComponent;
  let fixture: ComponentFixture<HeaderVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
