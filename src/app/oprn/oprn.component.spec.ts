import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprnComponent } from './oprn.component';

describe('OprnComponent', () => {
  let component: OprnComponent;
  let fixture: ComponentFixture<OprnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OprnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OprnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
