import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleComponentTsComponent } from './life-cycle.component.ts.component';

describe('LifeCycleComponentTsComponent', () => {
  let component: LifeCycleComponentTsComponent;
  let fixture: ComponentFixture<LifeCycleComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleComponentTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
