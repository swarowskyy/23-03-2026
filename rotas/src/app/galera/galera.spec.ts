import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galera } from './galera';

describe('Galera', () => {
  let component: Galera;
  let fixture: ComponentFixture<Galera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galera],
    }).compileComponents();

    fixture = TestBed.createComponent(Galera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
