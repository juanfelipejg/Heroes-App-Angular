import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeSearchedComponent } from './heroe-searched.component';

describe('HeroeSearchedComponent', () => {
  let component: HeroeSearchedComponent;
  let fixture: ComponentFixture<HeroeSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeSearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
