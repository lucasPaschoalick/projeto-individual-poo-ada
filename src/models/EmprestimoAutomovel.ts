import { Emprestimo } from './Emprestimo';

export class EmprestimoAutomovel extends Emprestimo {
  constructor(
    nome: string,
    idade: number,
    valor: number,
    parcelas: number,
    valorParcela: number,
    renda: number,
    public habilitacao: boolean
  ) {
    super(nome, idade, valor, valorParcela, parcelas, renda);
  }

  aprovarTransacao(): boolean {
    return this.idade >= 18 && this.renda > 3000 && this.habilitacao && this.valorParcela * this.parcelas === this.valor;
  }
}
