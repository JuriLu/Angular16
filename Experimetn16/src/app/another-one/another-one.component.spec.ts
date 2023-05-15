import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherOneComponent } from './another-one.component';

describe('AnotherOneComponent', () => {
  let component: AnotherOneComponent;
  let fixture: ComponentFixture<AnotherOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnotherOneComponent]
    });
    fixture = TestBed.createComponent(AnotherOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
