# 🏋️ Banco de Exercícios — Tutor ADS

## Como Usar
Cada exercício tem um nível de dificuldade e dicas progressivas.
O tutor deve apresentar apenas o enunciado primeiro e revelar dicas conforme o aluno pedir.

---

## 1. Lógica de Programação

### 🌱 Nível Iniciante

#### Ex 1.1 — Par ou Ímpar
**Enunciado**: Escreva um programa que leia um número inteiro e diga se ele é par ou ímpar.
- **Dica Leve**: Qual operador matemático retorna o resto de uma divisão?
- **Dica Média**: O operador `%` (módulo) retorna o resto. Se `n % 2 == 0`, o que isso significa?
- **Dica Forte**: Use `if numero % 2 == 0: print("Par") else: print("Ímpar")`

#### Ex 1.2 — Maior de Três
**Enunciado**: Leia 3 números e mostre qual é o maior.
- **Dica Leve**: Você precisa comparar os números dois a dois.
- **Dica Média**: Use `if/elif/else` para testar as condições.
- **Dica Forte**: Compare `a > b and a > c`, depois `b > c`.

#### Ex 1.3 — Tabuada
**Enunciado**: Leia um número e exiba sua tabuada de 1 a 10.
- **Dica Leve**: Você precisa repetir uma operação 10 vezes. Qual estrutura faz isso?
- **Dica Média**: Use um laço `for` de 1 até 10.
- **Dica Forte**: `for i in range(1, 11): print(f"{n} x {i} = {n*i}")`

#### Ex 1.4 — Fatorial
**Enunciado**: Calcule o fatorial de um número N digitado pelo usuário.
- **Dica Leve**: Fatorial de 5 = 5 × 4 × 3 × 2 × 1. Qual estrutura de repetição usar?
- **Dica Média**: Comece com resultado = 1 e multiplique em um laço decrescente.
- **Dica Forte**: `resultado = 1; for i in range(1, n+1): resultado *= i`

### 🌿 Nível Básico

#### Ex 1.5 — Fibonacci
**Enunciado**: Gere os N primeiros termos da sequência de Fibonacci.
- **Dica Leve**: Cada termo é a soma dos dois anteriores. Comece com 0 e 1.
- **Dica Média**: Use duas variáveis para guardar os dois últimos termos.
- **Dica Forte**: `a, b = 0, 1; for _ in range(n): print(a); a, b = b, a + b`

#### Ex 1.6 — Número Primo
**Enunciado**: Verifique se um número é primo.
- **Dica Leve**: Um número primo só é divisível por 1 e por ele mesmo.
- **Dica Média**: Teste divisibilidade de 2 até a raiz quadrada do número.
- **Dica Forte**: Use um laço com `range(2, int(n**0.5)+1)` e verifique se `n % i == 0`.

#### Ex 1.7 — Jogo da Adivinhação
**Enunciado**: Crie um jogo onde o computador sorteia um número de 1 a 100 e o jogador tenta adivinhar, recebendo dicas de "maior" ou "menor".
- **Dica Leve**: Use `import random` e `random.randint(1, 100)`.
- **Dica Média**: Use um `while` que só para quando o palpite é correto.
- **Dica Forte**: Compare o palpite com o número secreto e dê feedback.

### 🌳 Nível Intermediário

#### Ex 1.8 — Matriz Transposta
**Enunciado**: Leia uma matriz 3×3 e exiba sua transposta.
- **Dica Leve**: Na transposta, linhas viram colunas e vice-versa.
- **Dica Média**: O elemento [i][j] da transposta é o elemento [j][i] da original.
- **Dica Forte**: Use lista de listas e dois laços aninhados.

#### Ex 1.9 — Ordenação Manual
**Enunciado**: Implemente o algoritmo Bubble Sort para ordenar uma lista de números.
- **Dica Leve**: Compare pares adjacentes e troque se estiverem fora de ordem.
- **Dica Média**: Repita o processo N-1 vezes para garantir que tudo está ordenado.
- **Dica Forte**: Use dois laços `for` aninhados com troca condicional.

---

## 2. Programação Orientada a Objetos (Java)

### 🌱 Nível Iniciante

#### Ex 2.1 — Classe Pessoa
**Enunciado**: Crie uma classe `Pessoa` com atributos nome e idade, e um método `apresentar()` que exiba "Olá, meu nome é X e tenho Y anos".
- **Dica Leve**: Use `private` para os atributos e crie getters/setters.
- **Dica Média**: O construtor deve receber nome e idade como parâmetros.

#### Ex 2.2 — Classe ContaBancaria
**Enunciado**: Crie uma classe `ContaBancaria` com métodos depositar, sacar e consultarSaldo. O saldo não pode ficar negativo.
- **Dica Leve**: Use encapsulamento — o saldo deve ser `private`.
- **Dica Média**: No método `sacar`, verifique se há saldo suficiente antes.

### 🌿 Nível Básico

#### Ex 2.3 — Herança Animal
**Enunciado**: Crie uma hierarquia: `Animal` (classe pai) com `Cachorro` e `Gato` (classes filhas). Cada um deve ter um método `fazerSom()` diferente.
- **Dica Leve**: Use `extends` para herança e `@Override` para sobrescrever métodos.
- **Dica Média**: Crie um método abstrato em `Animal` ou um método padrão para sobrescrever.

#### Ex 2.4 — Interface Calculável
**Enunciado**: Crie uma interface `Calculavel` com método `calcularArea()`. Implemente em `Circulo`, `Retangulo` e `Triangulo`.
- **Dica Leve**: Uma interface define o contrato, cada classe implementa à sua maneira.
- **Dica Média**: Use `implements Calculavel` e forneça a fórmula específica de cada forma.

### 🌳 Nível Intermediário

#### Ex 2.5 — Sistema de Funcionários
**Enunciado**: Crie um sistema com `Funcionario` (abstrato), `Gerente` e `Desenvolvedor`. Cada tipo tem cálculo de salário diferente. Use polimorfismo para processar uma lista mista.
- **Dica Leve**: Polimorfismo permite tratar objetos diferentes de forma uniforme.
- **Dica Média**: Crie um `ArrayList<Funcionario>` e adicione gerentes e devs. Chame `calcularSalario()` em cada um.

---

## 3. Banco de Dados (SQL)

### 🌱 Nível Iniciante

#### Ex 3.1 — CRUD de Alunos
**Enunciado**: Crie uma tabela `alunos` com id, nome, email e curso. Insira 5 registros e faça consultas variadas.
- **Dica Leve**: Use `CREATE TABLE`, `INSERT INTO`, `SELECT`.
- **Dica Média**: Pratique `WHERE`, `ORDER BY`, `LIKE`.

#### Ex 3.2 — Consultas com Filtro
**Enunciado**: Na tabela de alunos, selecione: (a) todos do curso de ADS, (b) ordenados por nome, (c) que contenham "Silva" no nome.
- **Dica Leve**: Use `WHERE curso = 'ADS'`, `ORDER BY nome`, `WHERE nome LIKE '%Silva%'`.

### 🌿 Nível Básico

#### Ex 3.3 — JOIN entre Tabelas
**Enunciado**: Crie tabelas `pedidos` e `clientes`. Faça um JOIN para listar todos os pedidos com o nome do cliente.
- **Dica Leve**: Use chave estrangeira para relacionar as tabelas.
- **Dica Média**: `SELECT c.nome, p.data_pedido FROM clientes c INNER JOIN pedidos p ON c.id = p.cliente_id`.

#### Ex 3.4 — Funções de Agregação
**Enunciado**: Usando uma tabela de vendas, calcule: total de vendas, média por vendedor, máximo e mínimo.
- **Dica Leve**: Use `SUM()`, `AVG()`, `MAX()`, `MIN()` com `GROUP BY`.

---

## 4. Desenvolvimento Web

### 🌱 Nível Iniciante

#### Ex 4.1 — Página Pessoal
**Enunciado**: Crie uma página HTML com seu nome, foto, bio e links para redes sociais. Estilize com CSS.
- **Dica Leve**: Use tags semânticas: `<header>`, `<main>`, `<section>`, `<footer>`.

#### Ex 4.2 — Formulário de Contato
**Enunciado**: Crie um formulário com campos nome, email e mensagem. Valide com JavaScript que nenhum campo está vazio.
- **Dica Leve**: Use `addEventListener('submit', ...)` e `event.preventDefault()`.

### 🌿 Nível Básico

#### Ex 4.3 — Lista de Tarefas (To-Do)
**Enunciado**: Crie uma lista de tarefas interativa com JavaScript. O usuário deve poder adicionar, marcar como concluída e remover tarefas.
- **Dica Leve**: Use `createElement`, `appendChild`, e manipulação do DOM.
- **Dica Média**: Salve as tarefas no `localStorage` para persistir entre recarregamentos.

#### Ex 4.4 — Consumo de API
**Enunciado**: Crie uma página que consulte a API do ViaCEP e exiba o endereço de um CEP digitado.
- **Dica Leve**: Use `fetch('https://viacep.com.br/ws/{cep}/json/')`.
- **Dica Média**: Trate erros com `.catch()` e valide o formato do CEP.

### 🌳 Nível Intermediário

#### Ex 4.5 — CRUD Completo com API
**Enunciado**: Crie um sistema de cadastro de produtos com frontend (HTML/CSS/JS) consumindo uma API REST. Implemente Create, Read, Update e Delete.
- **Dica Leve**: Use `fetch` com métodos GET, POST, PUT, DELETE.
- **Dica Média**: Estruture o código com funções separadas para cada operação.

---

## 5. Desafios Extras

### 🌲 Nível Avançado

#### Ex 5.1 — Calculadora RPN
Implemente uma calculadora usando notação polonesa reversa com pilha.

#### Ex 5.2 — Mini Sistema Bancário
Sistema completo com múltiplas contas, transferências e extrato (usando OOP).

#### Ex 5.3 — Agenda de Contatos
CRUD completo com persistência em arquivo e busca por nome.

#### Ex 5.4 — Jogo da Velha
Jogo da velha com interface no terminal e IA básica para o computador.

#### Ex 5.5 — API REST com Node.js
Crie uma API completa com Express.js, rotas, middleware e conexão com banco de dados.

