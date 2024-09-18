import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPareggioComponent } from './client-pareggio.component';

describe('ClientPareggioComponent', () => {
  let component: ClientPareggioComponent;
  let fixture: ComponentFixture<ClientPareggioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPareggioComponent]
    });
    fixture = TestBed.createComponent(ClientPareggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
