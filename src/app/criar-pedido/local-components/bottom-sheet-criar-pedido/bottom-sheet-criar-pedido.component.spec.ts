import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomSheetCriarPedidoComponent } from './bottom-sheet-criar-pedido.component';

describe('BottomSheetCriarPedidoComponent', () => {
    let component: BottomSheetCriarPedidoComponent;
    let fixture: ComponentFixture<BottomSheetCriarPedidoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BottomSheetCriarPedidoComponent],
            providers: [
                { provide: MatBottomSheetRef, useValue: {} },
                { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(BottomSheetCriarPedidoComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('Deve chamar o metodo finalizar pedido com bottomSheet true', () => {
        const bottomSheetRefMock = jasmine.createSpyObj('MatBottomSheetRef', [
            'dismiss',
        ]);
        const dataSpyObj = jasmine.createSpyObj('MAT_BOTTOM_SHEET_DATA', [
            'data',
        ]);
        const componentMock = new BottomSheetCriarPedidoComponent(
            bottomSheetRefMock,
            dataSpyObj
        );
        componentMock.batatas = [
            {
                id: 1,
                nome: 'Product 1',
                qtd: 2,
                tipo: 'Type A',
                total: 100,
                url: 'https://example.com/product1',
                valor: 50,
            },
        ];
        componentMock.totalPedido = 1;

        componentMock.finalizaPedido();
        expect(bottomSheetRefMock.dismiss).toHaveBeenCalledWith('OK');
    });

    it('Deve chamar o metodo finalizar pedido com bottomSheet false', () => {
        const bottomSheetRefMock = jasmine.createSpyObj('MatBottomSheetRef', [
            'dismiss',
        ]);
        const dataSpyObj = jasmine.createSpyObj('MAT_BOTTOM_SHEET_DATA', [
            'data',
        ]);
        const componentMock = new BottomSheetCriarPedidoComponent(
            bottomSheetRefMock,
            dataSpyObj
        );
        componentMock.finalizaPedido();
        expect(bottomSheetRefMock.dismiss).toHaveBeenCalledWith('NOT OK');
    });

    it('Deve chamar bottomSheet dismiss quando chamar fechar bottomSheet', () => {
        const bottomSheetRefMock = jasmine.createSpyObj('MatBottomSheetRef', [
            'dismiss',
        ]);
        const dataSpyObj = jasmine.createSpyObj('MAT_BOTTOM_SHEET_DATA', [
            'data',
        ]);
        const componentMock = new BottomSheetCriarPedidoComponent(
            bottomSheetRefMock,
            dataSpyObj
        );
        componentMock.fechabottomSheet();
        expect(bottomSheetRefMock.dismiss).toHaveBeenCalled();
    });
});
