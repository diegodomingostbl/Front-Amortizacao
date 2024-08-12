import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AmortizacaoComponent } from './amortizacao/amortizacao.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [LoginComponent, AmortizacaoComponent, NotFoundComponent, UnauthorizedComponent],
  exports: [],
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
})
export class PagesModule {}
