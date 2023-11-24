import { Emprestimo } from './Emprestimo';

export class EmprestimoEstudantil extends Emprestimo {
  constructor(
    nome: string,
    idade: number,
    valor: number,
    parcelas: number,
    valorParcela: number,
    renda: number,
    public matriculado: boolean
  ) {
    super(nome, idade, valor, valorParcela, parcelas, renda);
  }

  aprovarTransacao(): boolean {
    return (
      this.idade >= 18 &&
      this.idade <= 30 &&
      this.renda > 1500 &&
      this.matriculado &&
      this.valorParcela * this.parcelas === this.valor
    );
  }
}
