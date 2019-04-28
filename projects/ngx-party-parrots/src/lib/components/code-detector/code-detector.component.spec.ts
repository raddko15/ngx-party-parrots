import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDetectorComponent } from './code-detector.component';

describe('CodeDetectorComponent', () => {
  let component: CodeDetectorComponent;
  let fixture: ComponentFixture<CodeDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
