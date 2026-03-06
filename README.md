# Steampunk Example Template

Este é um template de exemplo para o framework **Steampunk**, um framework web para Bun inspirado no ASP.NET Core, focado em alta performance e produtividade com TypeScript.

## Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

- **`src/`**: Contém o código fonte da aplicação.
    - **`main.ts`**: O ponto de entrada da aplicação. Aqui o `WebApplication` é configurado, serviços são registrados e os controllers são mapeados.
    - **`controllers/`**: Define as rotas e a lógica de tratamento de requisições. Utiliza decoradores como `@ApiController()` e `@Get()`.
    - **`services/`**: Contém a lógica de negócio e serviços injetáveis (`@Injectable()`).
    - **`config/`**: Configurações da aplicação, como validação de variáveis de ambiente usando Zod em `env.ts`.
- **`tests/`**: Suite de testes unitários utilizando o **Bun Test**.
- **`out/`**: Diretório de saída dos builds compilados.
- **`.env`**: Variáveis de ambiente (configurado via `.env.example`).
- **`eslint.config.js`** & **`.prettierrc`**: Configurações de linting e formatação (ESLint + Prettier).

## Como Começar

### Instalação

Certifique-se de ter o [Bun](https://bun.sh) instalado.

```bash
bun install
```

### Desenvolvimento

Para rodar o servidor em modo de observação (hot reload):

```bash
bun dev
```

O servidor estará disponível em `http://localhost:8080` (ou conforme definido no seu `.env`).

### Testes

Para executar os testes unitários:

```bash
bun test
```

### Build

Para compilar a aplicação para um executável binário:

```bash
bun run build
```

## Recursos do Steampunk

- **Dependency Injection**: Injeção de dependência nativa e robusta.
- **Decorators**: Sintaxe limpa baseada em decoradores para Controllers e Injeção.
- **OpenAPI/Scalar**: Documentação automática de API integrada.
- **High Performance**: Construído sobre o Bun para máxima velocidade.
