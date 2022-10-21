import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCreatedComponent } from './on-created.component';

describe('OnCreatedComponent', () => {
  let component: OnCreatedComponent;
  let fixture: ComponentFixture<OnCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
