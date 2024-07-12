import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchensetComponent } from './kitchenset.component';

describe('KitchensetComponent', () => {
  let component: KitchensetComponent;
  let fixture: ComponentFixture<KitchensetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchensetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchensetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
