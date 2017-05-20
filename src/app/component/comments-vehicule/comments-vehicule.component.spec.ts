import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsVehiculeComponent } from './comments-vehicule.component';

describe('CommentsVehiculeComponent', () => {
  let component: CommentsVehiculeComponent;
  let fixture: ComponentFixture<CommentsVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
