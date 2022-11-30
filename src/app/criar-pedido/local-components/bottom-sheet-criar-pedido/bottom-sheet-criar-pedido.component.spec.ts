import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetCriarPedidoComponent } from './bottom-sheet-criar-pedido.component';

describe('BottomSheetCriarPedidoComponent', () => {
  let component: BottomSheetCriarPedidoComponent;
  let fixture: ComponentFixture<BottomSheetCriarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetCriarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetCriarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
