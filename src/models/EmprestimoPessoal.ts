import { Emprestimo } from './Emprestimo';

export class EmprestimoPessoal extends Emprestimo {
  constructor(
    nome: string, 
    idade: number, 
    valor: number, 
    parcelas: number, 
    valorParcela: number, 
    renda: number
    ) {
    super(nome, idade, valor, valorParcela, parcelas, renda);
  }

  aprovarTransacao(): boolean {
    return this.idade >= 18 && this.renda > 2500 && this.valorParcela * this.parcelas === this.valor;
  }
}
