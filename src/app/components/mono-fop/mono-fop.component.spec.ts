import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoFopComponent } from './mono-fop.component';

describe('MonoFopComponent', () => {
  let component: MonoFopComponent;
  let fixture: ComponentFixture<MonoFopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonoFopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonoFopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
