import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferpageComponent } from './offerpage.component';

describe('OfferpageComponent', () => {
  let component: OfferpageComponent;
  let fixture: ComponentFixture<OfferpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
