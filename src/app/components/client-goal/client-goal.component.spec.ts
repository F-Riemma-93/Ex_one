import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGoalComponent } from './client-goal.component';

describe('ClientGoalComponent', () => {
  let component: ClientGoalComponent;
  let fixture: ComponentFixture<ClientGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientGoalComponent]
    });
    fixture = TestBed.createComponent(ClientGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
