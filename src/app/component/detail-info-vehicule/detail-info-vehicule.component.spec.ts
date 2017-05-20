import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoVehiculeComponent } from './detail-info-vehicule.component';

describe('DetailInfoVehiculeComponent', () => {
  let component: DetailInfoVehiculeComponent;
  let fixture: ComponentFixture<DetailInfoVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInfoVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInfoVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
