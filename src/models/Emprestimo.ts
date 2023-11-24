export abstract class Emprestimo {
    constructor(
      public nome: string,
      public idade: number,
      public valor: number,
      public parcelas: number,
      public valorParcela: number,
      public renda: number
    ) {}
  
    abstract aprovarTransacao(): boolean;
  }
  