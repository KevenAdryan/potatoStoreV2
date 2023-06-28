import { TransfereService } from './../services/transfere-service.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatatasComponent } from './batatas.component';
import {
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
    Component,
} from '@angular/core';

describe('BatatasComponent', () => {
    let component: BatatasComponent;
    let fixture: ComponentFixture<BatatasComponent>;

    let router = { navigate: jasmine.createSpy('navigate') };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BatatasComponent],
            imports: [HttpClientModule],
            providers: [
                TransfereService,
                { provide: Router, useValue: router },
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(BatatasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Deve chamar o getBatatas e realizar o subscribe', () => {
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);

        const batata = [
            { id: 1, nome: 'batata frita' },
            { id: 2, nome: 'batata assada' },
        ];

        batataServiceMock.getBatatas.and.returnValue(of(batata));
        const componentMock = new BatatasComponent(
            batataServiceMock,
            routerMock,
            transfereMock
        );

        componentMock.getBatatas();

        expect(componentMock.batatas).toEqual([
            { id: 1, nome: 'batata frita' },
            { id: 2, nome: 'batata assada' },
        ]);
        expect(componentMock.produtos).toEqual([
            { id: 1, nome: 'batata frita' },
            { id: 2, nome: 'batata assada' },
        ]);
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
        const componentMock = new BatatasComponent(
            batataServiceMock,
            routerMock,
            transfereMock
        );
        componentMock.produtos = [
            { id: 1, nome: 'batata frita' },
            { id: 2, nome: 'batata assada' },
            { id: 3, nome: 'batata doce' },
        ];

        // Act
        const eventMock = {
            target: { value: 'frita' },
        } as unknown as Event;
        componentMock.search(eventMock);

        // Assert
        expect(componentMock.batatas).toEqual([
            { id: 1, nome: 'batata frita' },
        ]);
    });

    it('Deve setar data e navegar para detail ao chamar o metodo navegateDetail', () => {
        const batataServiceMock = jasmine.createSpyObj('BatataService', [
            'getBatatas',
        ]);
        const routerMock = jasmine.createSpyObj('Router', ['navigateByUrl']);
        const transfereMock = jasmine.createSpyObj('TransfereService', [
            'setData',
        ]);
        const componentMock = new BatatasComponent(
            batataServiceMock,
            routerMock,
            transfereMock
        );

        componentMock.navegaDetail(22);

        expect(transfereMock.setData).toHaveBeenCalledWith(22);
        expect(routerMock.navigateByUrl).toHaveBeenCalledWith('detail');
    });
});
