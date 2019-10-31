import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroDetailComponent } from './retiro-detail.component';

describe('RetiroDetailComponent', () => {
  let component: RetiroDetailComponent;
  let fixture: ComponentFixture<RetiroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
