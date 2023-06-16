import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDisciplineComponent } from './choose-discipline.component';

describe('ChooseDisciplineComponent', () => {
  let component: ChooseDisciplineComponent;
  let fixture: ComponentFixture<ChooseDisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseDisciplineComponent]
    });
    fixture = TestBed.createComponent(ChooseDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
