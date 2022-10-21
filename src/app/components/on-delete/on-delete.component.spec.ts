import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDeleteComponent } from './on-delete.component';

describe('OnDeleteComponent', () => {
  let component: OnDeleteComponent;
  let fixture: ComponentFixture<OnDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
