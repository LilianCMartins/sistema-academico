# Frontend: Sistema Acadêmico

Interface web moderna desenvolvida com **React** e **Vite** para consumir a API REST do Sistema Acadêmico.

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Função |
| :--- | :--- | :--- |
| **React** | 19.2.0 | Biblioteca para construção de interfaces |
| **Vite** | 7.2.4 | Build tool e dev server |
| **JavaScript** | ES6+ | Linguagem de programação |

## 📦 Funcionalidades Implementadas

### ✅ Gerenciamento de Alunos
- Listar todos os alunos cadastrados
- Visualizar detalhes de alunos (incluindo cursos matriculados)
- Cadastrar novos alunos com validação de dados
- Deletar alunos existentes

### ✅ Gerenciamento de Cursos
- Listar todos os cursos cadastrados
- Visualizar detalhes de cursos
- Cadastrar novos cursos com validação
- Deletar cursos existentes

### ✅ Interface Responsiva
- Design moderno e intuitivo
- Adaptável para dispositivos móveis
- Feedback visual para ações do usuário
- Tratamento de erros amigável

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- pnpm (ou npm/yarn)
- Backend rodando em `http://localhost:8080`

### 1. Instalar Dependências

```bash
cd frontend
pnpm install
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto frontend (se não existir):

```env
VITE_API_URL=http://localhost:8080
```

### 3. Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

### 4. Build para Produção

```bash
pnpm build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🔗 Como Consumir a API

O frontend consome a API REST do backend através do arquivo `src/services/api.js`, que contém todas as funções para interagir com os endpoints:

### Endpoints de Alunos

- `GET /alunos` - Listar todos os alunos
- `GET /alunos/{id}` - Buscar aluno por ID
- `POST /alunos` - Criar novo aluno
- `PUT /alunos/{id}` - Atualizar aluno
- `DELETE /alunos/{id}` - Deletar aluno
- `GET /alunos/{id}/cursos` - Listar cursos do aluno
- `POST /alunos/{alunoId}/cursos/{cursoId}` - Matricular aluno em curso
- `DELETE /alunos/{alunoId}/cursos/{cursoId}` - Remover matrícula

### Endpoints de Cursos

- `GET /cursos` - Listar todos os cursos
- `GET /cursos/{id}` - Buscar curso por ID
- `POST /cursos` - Criar novo curso
- `PUT /cursos/{id}` - Atualizar curso
- `DELETE /cursos/{id}` - Deletar curso
- `GET /cursos/{id}/alunos` - Listar alunos do curso

## 📁 Estrutura do Projeto

```
frontend/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── AlunosList.jsx
│   │   ├── AlunoForm.jsx
│   │   ├── CursosList.jsx
│   │   └── CursoForm.jsx
│   ├── services/        # Serviços de API
│   │   └── api.js
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── .env                 # Variáveis de ambiente
├── package.json         # Dependências do projeto
└── vite.config.js       # Configuração do Vite
```

## ☁️ Deploy no Vercel

### Opção 1: Via Interface Web

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório `sistema-academico`
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `pnpm build`
   - **Output Directory:** `dist`
6. Adicione variável de ambiente:
   - `VITE_API_URL` = URL do backend no Render
7. Clique em "Deploy"

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Deploy
cd frontend
vercel --prod
```

### Configuração de Variáveis de Ambiente no Vercel

Após o deploy do backend no Render, atualize a variável `VITE_API_URL` no Vercel com a URL do backend em produção:

```
VITE_API_URL=https://seu-backend.onrender.com
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Lint
pnpm lint
```

## 🎨 Customização

### Alterar Cores do Tema

Edite o arquivo `src/App.css` e modifique as variáveis de cor:

```css
/* Cor primária */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cor dos botões */
.btn-submit {
  background: #667eea;
}
```

### Adicionar Novos Componentes

1. Crie o componente em `src/components/`
2. Importe no `App.jsx`
3. Adicione ao estado e renderização condicional

## 🐛 Troubleshooting

### Erro de CORS

Se encontrar erros de CORS, verifique se:
1. O backend está configurado para aceitar requisições do frontend
2. A URL da API no `.env` está correta
3. O backend está rodando

### Build Falha

Se o build falhar:
1. Limpe o cache: `rm -rf node_modules dist`
2. Reinstale dependências: `pnpm install`
3. Tente novamente: `pnpm build`

## 📚 Referências

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vercel Documentation](https://vercel.com/docs)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

**Desenvolvido como parte da Prática Avaliativa: Sistema Acadêmico com Spring Boot 3**
