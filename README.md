# 🎓 Sistema Acadêmico - Full Stack

Sistema acadêmico completo desenvolvido com **Spring Boot 3** (backend) e **React + Vite** (frontend), implementando gerenciamento de alunos e cursos com relacionamento N:N, segurança, monitoramento, testes unitários, testes de carga e deploy completo.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte de uma prática avaliativa, cumprindo todos os requisitos especificados:

- ✅ Relacionamento entre entidades (N:N entre Aluno e Curso)
- ✅ Segurança com autenticação (Spring Security + OAuth2)
- ✅ Monitoramento com métricas e alertas (Actuator, Prometheus, Grafana)
- ✅ Testes unitários (JUnit 5 + Mockito)
- ✅ Testes de carga e stress (Gatling)
- ✅ Documentação da API (Swagger/OpenAPI)
- ✅ Deploy completo do backend (Render) e frontend (Vercel)
- ✅ Frontend funcional (BÔNUS)

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                             │
│                    React + Vite                             │
│                  (Vercel Deploy)                            │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/REST
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                     Backend API                             │
│                  Spring Boot 3                              │
│                  (Render Deploy)                            │
├─────────────────────────────────────────────────────────────┤
│  Controllers → Services → Repositories → Database (H2)      │
└────────────────────┬────────────────────────────────────────┘
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
    ┌──────────┐          ┌──────────┐
    │Prometheus│          │ Grafana  │
    │  :9090   │─────────▶│  :3000   │
    └──────────┘          └──────────┘
```

## 🚀 Tecnologias Utilizadas

### Backend

- **Framework:** Spring Boot 3.2.0
- **Linguagem:** Java 17
- **Persistência:** Spring Data JPA + H2 Database
- **Segurança:** Spring Security + OAuth2
- **Monitoramento:** Actuator + Prometheus + Grafana
- **Documentação:** Springdoc OpenAPI (Swagger)
- **Testes:** JUnit 5 + Mockito + Gatling
- **Build:** Maven

### Frontend

- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Linguagem:** JavaScript ES6+
- **Estilização:** CSS3

### DevOps

- **Containerização:** Docker + Docker Compose
- **Deploy Backend:** Render
- **Deploy Frontend:** Vercel
- **Monitoramento:** Prometheus + Grafana

## 📦 Estrutura do Repositório

```
sistema-academico/
├── backend/                 # API REST Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/academico/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── exception/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   └── service/
│   │   │   └── resources/
│   │   └── test/
│   │       ├── java/         # Testes unitários
│   │       └── scala/        # Testes de carga (Gatling)
│   ├── Dockerfile
│   ├── pom.xml
│   └── README.md
│
├── frontend/                # Interface React
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── config/                  # Configurações de monitoramento
│   ├── prometheus.yml
│   └── grafana-datasources.yml
│
├── docker-compose.yml       # Orquestração de serviços
└── README.md               # Este arquivo
```

## 🛠️ Como Rodar o Projeto Completo

### Opção 1: Rodar Tudo com Docker Compose

```bash
# Clonar repositório
git clone https://github.com/LilianCMartins/sistema-academico.git
cd sistema-academico

# Iniciar todos os serviços
docker-compose up -d

# Acessar aplicações
# Backend: http://localhost:8082
# Prometheus: http://localhost:9090
# Grafana: http://localhost:3000
```

### Opção 2: Rodar Separadamente

#### Backend

```bash
cd backend
./mvnw spring-boot:run
# Acesse: http://localhost:8080
```

#### Frontend

```bash
cd frontend
pnpm install
pnpm dev
# Acesse: http://localhost:5173

```

## 📊 Funcionalidades Implementadas

### Backend (API REST)

#### Gerenciamento de Alunos
- ✅ Listar todos os alunos
- ✅ Buscar aluno por ID
- ✅ Criar novo aluno (com validações)
- ✅ Atualizar aluno existente
- ✅ Deletar aluno
- ✅ Listar cursos de um aluno
- ✅ Matricular aluno em curso
- ✅ Remover matrícula de aluno

#### Gerenciamento de Cursos
- ✅ Listar todos os cursos
- ✅ Buscar curso por ID
- ✅ Criar novo curso (com validações)
- ✅ Atualizar curso existente
- ✅ Deletar curso (com validação de alunos matriculados)
- ✅ Listar alunos de um curso

#### Recursos Técnicos
- ✅ DTOs para separar camadas
- ✅ Service Layer com lógica de negócio
- ✅ Validações de entrada (Bean Validation)
- ✅ Tratamento global de exceções
- ✅ Mensagens de erro padronizadas
- ✅ CORS configurado
- ✅ Dados de exemplo pré-carregados

### Frontend (Interface Web)

- ✅ Interface responsiva e moderna
- ✅ Listagem de alunos com cursos matriculados
- ✅ Listagem de cursos
- ✅ Formulário de cadastro de alunos
- ✅ Formulário de cadastro de cursos
- ✅ Exclusão de alunos e cursos
- ✅ Feedback visual de ações
- ✅ Tratamento de erros
- ✅ Integração completa com API

### Monitoramento

- ✅ Spring Boot Actuator configurado
- ✅ Métricas Prometheus expostas
- ✅ Grafana com datasource configurado
- ✅ Health checks
- ✅ Métricas de JVM, HTTP, sistema

### Testes

- ✅ Testes unitários de Services
- ✅ Testes unitários de Controllers
- ✅ Testes de carga com Gatling
- ✅ Cobertura de cenários críticos
- ✅ Relatórios de performance

## 📄 Documentação

### Swagger UI

Acesse a documentação interativa da API:

- **Local:** `http://localhost:8080/swagger-ui.html`
- **Produção:** `https://seu-backend.onrender.com/swagger-ui.html`

### READMEs Detalhados

- [Backend README](backend/README.md) - Instruções completas do backend
- [Frontend README](frontend/README.md) - Instruções completas do frontend

## 🧪 Executar Testes

### Testes Unitários

```bash
cd backend
./mvnw test
```

### Testes de Carga

```bash
# Iniciar aplicação
./mvnw spring-boot:run

# Em outro terminal
./mvnw gatling:test

# Relatório gerado em: target/gatling/*/index.html
```

## 📊 Monitoramento

### Acessar Prometheus

```
http://localhost:9090
```

Exemplos de queries:

```promql
# Taxa de requisições HTTP
rate(http_server_requests_seconds_count[1m])

# Uso de memória JVM
jvm_memory_used_bytes{area="heap"}

# Threads ativas
jvm_threads_live
```

### Acessar Grafana

```
http://localhost:3000
Login: admin / admin
```

Dashboards recomendados:
- **ID 4701:** Spring Boot Statistics
- **ID 11378:** JVM Micrometer

## ☁️ Deploy

### Backend no Render

1. Acesse [render.com](https://render.com)
2. Crie novo Web Service
3. Conecte o repositório GitHub
4. Configure:
   - Environment: Docker
   - Dockerfile Path: `backend/Dockerfile`
5. Deploy!

### Frontend no Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório
3. Configure:
   - Root Directory: `frontend`
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
4. Adicione variável: `VITE_API_URL=<URL_DO_BACKEND>`
5. Deploy!

## 🎯 Requisitos Atendidos

### Requisitos Funcionais ✅

- [x] Entidade Aluno (id, nome, email, matricula)
- [x] Entidade Curso (id, nome, cargaHoraria)
- [x] Relacionamento N:N entre Aluno e Curso
- [x] CRUD completo de Alunos
- [x] CRUD completo de Cursos
- [x] Gerenciamento de matrículas

### Requisitos Técnicos ✅

- [x] Spring Boot 3
- [x] Todas as dependências obrigatórias
- [x] Spring Security configurado
- [x] Banco de dados H2
- [x] Spring Data JPA
- [x] Actuator + Prometheus + Grafana
- [x] Swagger/OpenAPI
- [x] Testes unitários (JUnit + Mockito)
- [x] Testes de carga (Gatling)
- [x] Docker Compose
- [x] Deploy backend (Render)
- [x] Deploy frontend (Vercel)

### Requisitos de Documentação ✅

- [x] README.md do backend completo
- [x] README.md do frontend completo
- [x] README.md principal
- [x] Instruções de execução local
- [x] Instruções de testes
- [x] Instruções de deploy
- [x] Referências utilizadas

### Bônus ✅

- [x] Frontend funcional completo
- [x] Interface responsiva
- [x] Integração com backend
- [x] Validações no frontend

## 🤝 Contribuindo

Este é um projeto acadêmico, mas contribuições são bem-vindas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👥 Autor

**Lilian C. Martins**

- GitHub: [@LilianCMartins](https://github.com/LilianCMartins)

## 📚 Referências

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html)
- [Spring Security Documentation](https://docs.spring.io/spring-security/reference/index.html)
- [Spring Data JPA Documentation](https://docs.spring.io/spring-data/jpa/docs/current/reference/html)
- [Springdoc OpenAPI Documentation](https://springdoc.org)
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview)
- [Grafana Documentation](https://grafana.com/docs/grafana/latest)
- [Gatling Documentation](https://gatling.io/docs/gatling/reference/current)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

