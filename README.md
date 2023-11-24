# Trabalho Individual - Módulo de Programação Orientada a Objetos
SISTEMA DE EMPRÉSTIMO
Você é encarregado de desenvolver um script que automatiza a aprovação de empréstimos com base em critérios específicos.
Há três tipos possíveis de solicitação de empréstimo: pessoal, automóvel e estudantil.

O script deverá processar as solicitações, filtrar as que atendem aos critérios de aprovação descritos abaixo:

1. O solicitante deve ter no mínimo 18 anos.
2. O valor total do empréstimo deve ser igual ao número de parcelas multiplicado pelo valor por parcela.
3. Para empréstimos do tipo "pessoal", o solicitante deve ter uma renda mensal superior a de R$ 2.500,00.
4. Para empréstimos do tipo "automóvel", o solicitante deve ter uma renda mensal superior a R$ 3.000,00 e possuir habilitação.
5. Para empréstimos do tipo "estudantil", o solicitante deve ter entre 18 e 30 anos, renda superior a R$ 1.500,00 e estar matriculado em uma instituição de ensino superior.

Em seguida, o sistema deve listar as solicitações aprovadas e reprovadas no seguinte formato:

- Nome Solicitante 1 [APROVADO]
- Nome Solicitante 2 [REPROVADO]

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

- Clone o repositório:
```bash
git clone https://github.com/seu-usuario/projeto-individual.git
```

- Instale as dependências:
```bash
npm install
```

## Execução
- Compile o código TypeScript:

```bash
npm run build
```

- Em seguida, execute o aplicativo:

```bash
npm start
```