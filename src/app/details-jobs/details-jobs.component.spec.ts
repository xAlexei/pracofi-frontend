import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJobsComponent } from './details-jobs.component';

describe('DetailsJobsComponent', () => {
  let component: DetailsJobsComponent;
  let fixture: ComponentFixture<DetailsJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
