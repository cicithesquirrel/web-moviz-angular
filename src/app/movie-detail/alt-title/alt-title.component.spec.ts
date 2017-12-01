import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTitleComponent } from './alt-title.component';

describe('AltTitleComponent', () => {
  let component: AltTitleComponent;
  let fixture: ComponentFixture<AltTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
