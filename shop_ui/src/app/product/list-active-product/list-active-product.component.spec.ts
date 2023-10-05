import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActiveProductComponent } from './list-active-product.component';

describe('ListActiveProductComponent', () => {
  let component: ListActiveProductComponent;
  let fixture: ComponentFixture<ListActiveProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActiveProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
