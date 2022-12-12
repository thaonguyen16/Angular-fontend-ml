import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalihousingComponent } from './calihousing.component';

describe('CalihousingComponent', () => {
  let component: CalihousingComponent;
  let fixture: ComponentFixture<CalihousingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalihousingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalihousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
