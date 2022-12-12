import { FilterPipe } from './pipes/filter-pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTabsModule } from '@angular/material/tabs';

import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { BatatasComponent } from './batatas/batatas.component';
import { BatataCruaComponent } from './batata-crua/batata-crua.component';
import { BatataAssadaComponent } from './batata-assada/batata-assada.component';
import { PureBatataComponent } from './pure-batata/pure-batata.component';
import { BatataFritaComponent } from './batata-frita/batata-frita.component';
import { SementeBatataComponent } from './semente-batata/semente-batata.component';
import { DetailComponent } from './detail/detail.component';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { BottomSheetCriarPedidoComponent } from './criar-pedido/local-components/bottom-sheet-criar-pedido/bottom-sheet-criar-pedido.component';
import { PagamentoComponent } from './pagamento/pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    BatatasComponent,
    BatataCruaComponent,
    BatataAssadaComponent,
    PureBatataComponent,
    BatataFritaComponent,
    SementeBatataComponent,
    DetailComponent,
    CriarPedidoComponent,
    BottomSheetCriarPedidoComponent,
    PagamentoComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatBottomSheetModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
