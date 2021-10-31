import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDeluxeDialogComponent } from './store-deluxe-dialog.component';

describe('StoreDeluxeDialogComponent', () => {
  let component: StoreDeluxeDialogComponent;
  let fixture: ComponentFixture<StoreDeluxeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDeluxeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDeluxeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
