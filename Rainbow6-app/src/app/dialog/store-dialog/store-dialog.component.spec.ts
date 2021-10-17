import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDialogComponent } from './store-dialog.component';

describe('StoreDialogComponent', () => {
  let component: StoreDialogComponent;
  let fixture: ComponentFixture<StoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
