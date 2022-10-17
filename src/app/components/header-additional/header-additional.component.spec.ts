import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdditionalComponent } from './header-additional.component';

describe('HeaderAdditionalComponent', () => {
  let component: HeaderAdditionalComponent;
  let fixture: ComponentFixture<HeaderAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
