import { BottomSheetCriarPedidoComponent } from './local-components/bottom-sheet-criar-pedido/bottom-sheet-criar-pedido.component';
import { of } from 'rxjs';
import {
    MatBottomSheet,
    MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPedidoComponent } from './criar-pedido.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CriarPedidoComponent', () => {
    let component: CriarPedidoComponent;
    let fixture: ComponentFixture<CriarPedidoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CriarPedidoComponent],
            imports: [HttpClientModule, MatBottomSheetModule],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(CriarPedidoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Deve chamar getBatatas', () => {
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);
        const bottomSheetMock = jasmine.createSpyObj('MatBottomSheet', [
            'open',
        ]);

        const batata = [
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'asd',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ];

        batataServiceMock.getBatatas.and.returnValue(of(batata));

        const componentMock = new CriarPedidoComponent(
            batataServiceMock,
            bottomSheetMock,
            routerMock,
            transfereMock
        );

        componentMock.carregaBatatas();

        expect(componentMock.batatas).toEqual([
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'asd',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ]);
        expect(componentMock.produtos).toEqual([
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'asd',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ]);
        expect(componentMock.produtos2).toEqual([
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'asd',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ]);
    });

    it('Deve testar o tipo selecionado do metodo selecionaTipo', () => {
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);
        const bottomSheetMock = jasmine.createSpyObj('MatBottomSheet', [
            'open',
        ]);
        const componentMock = new CriarPedidoComponent(
            batataServiceMock,
            bottomSheetMock,
            routerMock,
            transfereMock
        );

        componentMock.opcoes = [
            { op: 'opt1', type: 'Batata Crua', nomeAPI: 'batataCrua' },
        ];

        componentMock.produtos2 = [
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'batataCrua',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ];

        let spy = jasmine.createSpy('tipoOP');

        componentMock.tipo = 'opcao0';
        componentMock.selecionaTipo('opt1');

        expect(componentMock.tipo).toEqual('Batata Crua');
        expect(spy).toBeDefined();
        expect(componentMock.batatas).toBeDefined();
        expect(componentMock.batatas).toEqual([
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'batataCrua',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ]);
    });

    it('Deve definir batatas se o tipo for todas', () => {
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);
        const bottomSheetMock = jasmine.createSpyObj('MatBottomSheet', [
            'open',
        ]);
        const componentMock = new CriarPedidoComponent(
            batataServiceMock,
            bottomSheetMock,
            routerMock,
            transfereMock
        );

        componentMock.opcoes = [
            { op: 'opt0', type: 'Todas', nomeAPI: 'todas' },
        ];

        componentMock.selecionaTipo('opt0');

        expect(componentMock.batatas).toBeDefined();
    });

    it('Deve filtrar batatas pelo valor da entrada de pesquisa', () => {
        // Arrange
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);
        const bottomSheetMock = jasmine.createSpyObj('MatBottomSheet', [
            'open',
        ]);
        const componentMock = new CriarPedidoComponent(
            batataServiceMock,
            bottomSheetMock,
            routerMock,
            transfereMock
        );

        componentMock.produtos = [
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'batataCrua',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ];

        // Act
        const eventMock = {
            target: { value: 'kk' },
        } as unknown as Event;
        componentMock.search(eventMock);

        // Assert
        expect(componentMock.batatas).toEqual([
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'batataCrua',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ]);
    });

    it('Deve chamar a função addQTD e subQTD corretamente', () => {
        component.produtos = [
            {
                id: 1,
                nome: 'batataCrua',
                qtd: 0,
                tipo: 'batataCrua',
                total: 0,
                url: 'Akitemumaurl.com.br',
                valor: 2,
            },
        ];
        const batata = {
            id: 1,
            nome: 'batataCrua',
            qtd: 0,
            tipo: 'batataCrua',
            total: 0,
            url: 'Akitemumaurl.com.br',
            valor: 2,
        };
        let spyAdd = spyOn(component, 'addQTD')
            .withArgs(batata)
            .and.callThrough();
        let spySub = spyOn(component, 'subQTD')
            .withArgs(batata)
            .and.callThrough();

        component.addQTD(batata);
        component.subQTD(batata);
        expect(spyAdd).toHaveBeenCalled();
        expect(spySub).toHaveBeenCalled();
    });

    it('Deve chamar subQTD com valor de quantidade zerada', () => {
        component.produtos = [
            {
                id: 1,
                nome: 'batataCrua',
                qtd: 0,
                tipo: 'batataCrua',
                total: 0,
                url: 'Akitemumaurl.com.br',
                valor: 2,
            },
        ];
        const batata = {
            id: 1,
            nome: 'batataCrua',
            qtd: 0,
            tipo: 'batataCrua',
            total: 0,
            url: 'Akitemumaurl.com.br',
            valor: 2,
        };

        let spySub = spyOn(component, 'subQTD')
            .withArgs(batata)
            .and.callThrough();

        component.subQTD(batata);

        expect(spySub).toHaveBeenCalled();
    });

    it('Deve alterar o total', () => {
        component.produtos = [
            {
                id: 1,
                nome: 'batataCrua',
                qtd: 0,
                tipo: 'batataCrua',
                total: 0,
                url: 'Akitemumaurl.com.br',
                valor: 2,
            },
        ];
        const eventMock = {
            value: 5,
        } as unknown as Event;
        const batata = {
            id: 1,
            nome: 'batataCrua',
            qtd: 0,
            tipo: 'batataCrua',
            total: 0,
            url: 'Akitemumaurl.com.br',
            valor: 2,
        };
        let spy = spyOn(component, 'alteraTotal')
            .withArgs(eventMock, batata)
            .and.callThrough();

        component.alteraTotal(eventMock, batata);

        expect(spy).toHaveBeenCalled();
    });

    it('Deve chamar corretametne a função somaPagar', () => {
        component.produtos = [
            {
                id: 1,
                nome: 'batataCrua',
                qtd: 0,
                tipo: 'batataCrua',
                total: 5,
                url: 'Akitemumaurl.com.br',
                valor: 2,
            },
        ];

        let spy = spyOn(component, 'somaPagar').and.callThrough();

        component.somaPagar();

        expect(spy).toHaveBeenCalled();
    });

    it('', () => {
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);

        const bottomSheetRefMock = jasmine.createSpyObj('MatBottomSheetRef', [
            'afterDismissed',
        ]);

        const bottomSheetMock = jasmine.createSpyObj('MatBottomSheet', [
            'open',
            'dismiss',
            bottomSheetRefMock,
        ]);

        //bottomSheetMock.afterDismissed = jasmine.createSpy(afterDismissedMock);

        const componentMock = new CriarPedidoComponent(
            batataServiceMock,
            bottomSheetMock,
            routerMock,
            transfereMock
        );

        //bottomSheetMock.open.afterDismissed = spyOn();

        componentMock.produtos = [
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'batataCrua',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ];
        componentMock.totalPedido = 1;

        componentMock.fechaPedido();
    });

    it('should filter products with total greater than zero and open bottom sheet with those products and total order', () => {
        // Arrange
        const products = [
            {
                id: 1,
                nome: 'kk',
                qtd: 1,
                tipo: 'batataCrua',
                total: 1,
                url: '12312',
                valor: 1,
            },
        ];
        const totalOrder = 30;
        const service = {
            open: jasmine.createSpy('open').and.returnValue({
                afterDismissed: jasmine
                    .createSpy('afterDismissed')
                    .and.returnValue({
                        subscribe: jasmine.createSpy('subscribe'),
                    }),
            }),
        };
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);
        const bottomSheetMock = jasmine.createSpyObj('MatBottomSheet', [
            'open',
        ]);
        const componentMock = new CriarPedidoComponent(
            batataServiceMock,
            bottomSheetMock,
            routerMock,
            transfereMock
        );
        componentMock.produtos = products;
        componentMock.totalPedido = totalOrder;

        // Act
        componentMock.fechaPedido();

        // Assert
        expect(service.open).toHaveBeenCalledWith(
            BottomSheetCriarPedidoComponent,
            {
                data: {
                    batatas: [{ total: 10 }],
                    total: totalOrder,
                },
            }
        );
    });
});
