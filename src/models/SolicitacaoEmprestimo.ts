import { Emprestimo } from './Emprestimo';

export class SolicitacaoEmprestimo {
  private emprestimos: Emprestimo[] = [];

  add(...emprestimo: Emprestimo[]): void {
    this.emprestimos.push(...emprestimo);
  }

  processarSolicitacoes(): void {
    for (const emprestimo of this.emprestimos) {
      emprestimo.aprovarTransacao()
        ? console.log(`${emprestimo.nome} [APROVADO]`)
        : console.log(`${emprestimo.nome} [REPROVADO]`);
    }
  }
}
