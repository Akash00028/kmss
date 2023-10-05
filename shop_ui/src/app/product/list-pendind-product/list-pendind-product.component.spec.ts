import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPendindProductComponent } from './list-pendind-product.component';

describe('ListPendindProductComponent', () => {
  let component: ListPendindProductComponent;
  let fixture: ComponentFixture<ListPendindProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPendindProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPendindProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
