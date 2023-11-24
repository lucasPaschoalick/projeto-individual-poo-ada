import { EmprestimoPessoal } from './models/EmprestimoPessoal';
import { EmprestimoAutomovel } from './models/EmprestimoAutomovel';
import { EmprestimoEstudantil } from './models/EmprestimoEstudantil';
import { SolicitacaoEmprestimo } from './models/SolicitacaoEmprestimo';

const solicitacoes = new SolicitacaoEmprestimo();

const emprestimosGerais = [
  new EmprestimoPessoal('João', 25, 3000.0, 12, 250.0, 3000.0),
  new EmprestimoPessoal('Pedro', 18, 5000.0, 2, 200.0, 1500.0),
  new EmprestimoAutomovel('Maria', 22, 15000.0, 24, 625.0, 3500.0, true),
  new EmprestimoAutomovel('Claudia', 28, 2000.0, 5, 300.0, 2500.0, false),
  new EmprestimoEstudantil('Lucas', 19, 8000.0, 10, 800.0, 2000.0, true),
  new EmprestimoEstudantil('Carlos', 15, 7500.0, 18, 500.0, 7000.0, false),
];

solicitacoes.add(...emprestimosGerais);
solicitacoes.processarSolicitacoes();
