import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteopenComponent } from './siteopen.component';

describe('SiteopenComponent', () => {
  let component: SiteopenComponent;
  let fixture: ComponentFixture<SiteopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteopenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
