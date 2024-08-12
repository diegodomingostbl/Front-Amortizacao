import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AmortizationTableRow } from '../../interface/amortization.interface';

@Component({
  selector: 'app-amortizacao',
  templateUrl: './amortizacao.component.html',
  styleUrl: './amortizacao.component.css',
})
export class AmortizacaoComponent {
  amortizationForm: FormGroup;
  amortizationTable: AmortizationTableRow[] = [];

  constructor(private fb: FormBuilder) {
    this.amortizationForm = this.fb.group({
      financedValue: ['', [Validators.required]],
      annualInterest: ['', [Validators.required, Validators.min(0)]],
      monthlyAmortization: ['', [Validators.required, Validators.min(0)]],
      monthlyPayment: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.amortizationForm.valid) {
      const {
        financedValue,
        annualInterest,
        monthlyAmortization,
        monthlyPayment,
      } = this.amortizationForm.value;
      this.calculateAmortization(
        financedValue,
        annualInterest,
        monthlyAmortization,
        monthlyPayment
      );
    }
  }

  calculateAmortization(
    financedValue: number,
    annualInterest: number,
    monthlyAmortization: number,
    monthlyPayment: number
  ): void {
    this.amortizationTable = [];
    let balance = financedValue;
    const monthlyInterestRate = annualInterest / 12 / 100;
    let month = 1;

    while (balance > 0) {
      const initialBalance = balance;
      const interest = balance * monthlyInterestRate; //juros pago no mes
      const payment = monthlyAmortization + monthlyPayment; //valor que paguei no mes
      balance -= payment - interest; //valor que irá subtrair do meu valor devido

      if (balance < 0) balance = 0;

      this.amortizationTable.push({
        month,
        initialBalance: initialBalance,
        payment: monthlyPayment,
        amortized: monthlyAmortization,
        interest: interest,
        finalBalance: balance,
      });

      month++;
    }
  }
}
