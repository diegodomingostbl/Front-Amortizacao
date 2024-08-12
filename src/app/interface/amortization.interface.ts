export interface AmortizationTableRow {
  month: number; // Mês
  initialBalance: number; // Saldo Devedor
  payment: number; // Parcela
  amortized: number; // Amortizado
  interest: number; // Juros
  finalBalance: number; // Saldo Devedor Final
}
