import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DammyComponent } from './dammy.component';

describe('DammyComponent', () => {
  let component: DammyComponent;
  let fixture: ComponentFixture<DammyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DammyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DammyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
