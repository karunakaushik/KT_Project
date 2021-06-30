import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtdetailsComponent } from './wtdetails.component';

describe('WtdetailsComponent', () => {
  let component: WtdetailsComponent;
  let fixture: ComponentFixture<WtdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WtdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
