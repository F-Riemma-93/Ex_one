import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionePartitaComponent } from './gestione-partita.component';

describe('GestionePartitaComponent', () => {
  let component: GestionePartitaComponent;
  let fixture: ComponentFixture<GestionePartitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionePartitaComponent]
    });
    fixture = TestBed.createComponent(GestionePartitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
