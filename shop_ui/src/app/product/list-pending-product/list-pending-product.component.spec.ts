import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendingProductComponent } from './list-pending-product.component';

describe('ListPendingProductComponent', () => {
  let component: ListPendingProductComponent;
  let fixture: ComponentFixture<ListPendingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendingProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPendingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
