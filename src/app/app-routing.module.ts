import { SementeBatataComponent } from './semente-batata/semente-batata.component';
import { BatataFritaComponent } from './batata-frita/batata-frita.component';
import { PureBatataComponent } from './pure-batata/pure-batata.component';
import { BatataAssadaComponent } from './batata-assada/batata-assada.component';
import { BatataCruaComponent } from './batata-crua/batata-crua.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BatatasComponent } from './batatas/batatas.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BatatasComponent },
      { path: 'batata-crua', component: BatataCruaComponent },
      { path: 'batata-assada', component: BatataAssadaComponent },
      { path: 'pure-batata', component: PureBatataComponent },
      { path: 'batata-frita', component: BatataFritaComponent },
      { path: 'semente-batata', component: SementeBatataComponent },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
