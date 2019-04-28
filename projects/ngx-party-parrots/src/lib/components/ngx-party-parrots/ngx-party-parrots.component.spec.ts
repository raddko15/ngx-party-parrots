import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPartyParrotsComponent } from './ngx-party-parrots.component';

describe('NgxPartyParrotsComponent', () => {
  let component: NgxPartyParrotsComponent;
  let fixture: ComponentFixture<NgxPartyParrotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPartyParrotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPartyParrotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
