import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AmortizacaoComponent } from './pages/amortizacao/amortizacao.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { AuthenticatorGuard } from './auth/authenticator.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'amortizacao',
    component: AmortizacaoComponent,
    canActivate: [AuthenticatorGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
