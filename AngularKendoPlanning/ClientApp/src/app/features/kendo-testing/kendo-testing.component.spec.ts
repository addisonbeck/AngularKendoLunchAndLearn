import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTestingComponent } from './kendo-testing.component';

describe('KendoTestingComponent', () => {
  let component: KendoTestingComponent;
  let fixture: ComponentFixture<KendoTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
