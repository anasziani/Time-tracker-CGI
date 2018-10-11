import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintTabComponent } from './sprints.component';

describe('SprintTabComponent', () => {
  let component: SprintTabComponent;
  let fixture: ComponentFixture<SprintTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
