# Backend: Sistema Acadêmico com Spring Boot 3

Sistema acadêmico completo desenvolvido com **Spring Boot 3**, implementando gerenciamento de alunos e cursos com relacionamento N:N, segurança, monitoramento, testes unitários e testes de carga.

## 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Versão | Função |
| :--- | :--- | :--- | :--- |
| **Framework** | Spring Boot | 3.2.0 | Desenvolvimento de APIs REST |
| **Linguagem** | Java | 17 | Linguagem de programação |
| **Persistência** | Spring Data JPA | 3.2.0 | Gerenciamento de dados |
| **Banco de Dados** | H2 Database | 2.2.224 | Banco em memória |
| **Segurança** | Spring Security | 6.2.0 | Autenticação e autorização |
| **Monitoramento** | Actuator + Prometheus | 3.2.0 | Métricas e health checks |
| **Documentação** | Springdoc OpenAPI | 2.3.0 | Documentação Swagger |
| **Testes** | JUnit 5 + Mockito | 5.10.1 | Testes unitários |
| **Testes de Carga** | Gatling | 3.9.5 | Testes de performance |
| **Build** | Maven | 3.9+ | Gerenciamento de dependências |

## 📦 Dependências Obrigatórias

Todas as dependências obrigatórias especificadas no documento foram implementadas:

- ✅ `spring-boot-devtools` - Hot reload durante desenvolvimento
- ✅ `spring-boot-starter-web` - APIs REST
- ✅ `spring-boot-starter-security` - Segurança e autenticação
- ✅ `spring-boot-starter-data-jpa` - Persistência de dados
- ✅ `spring-boot-starter-actuator` - Monitoramento
- ✅ `springdoc-openapi-ui` - Documentação Swagger
- ✅ `h2` - Banco de dados em memória
- ✅ `micrometer-registry-prometheus` - Métricas Prometheus
- ✅ `gatling-charts-highcharts` - Testes de carga

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura em camadas bem definida:

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/academico/
│   │   │   ├── config/           # Configurações
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   └── DataInitializer.java
│   │   │   ├── controller/       # Controllers REST
│   │   │   │   ├── AlunoController.java
│   │   │   │   └── CursoController.java
│   │   │   ├── dto/              # Data Transfer Objects
│   │   │   │   ├── AlunoDTO.java
│   │   │   │   └── CursoDTO.java
│   │   │   ├── exception/        # Tratamento de exceções
│   │   │   │   ├── GlobalExceptionHandler.java
│   │   │   │   ├── ResourceNotFoundException.java
│   │   │   │   ├── BusinessException.java
│   │   │   │   └── ErrorResponse.java
│   │   │   ├── model/            # Entidades JPA
│   │   │   │   ├── Aluno.java
│   │   │   │   └── Curso.java
│   │   │   ├── repository/       # Repositories
│   │   │   │   ├── AlunoRepository.java
│   │   │   │   └── CursoRepository.java
│   │   │   ├── service/          # Lógica de negócio
│   │   │   │   ├── AlunoService.java
│   │   │   │   └── CursoService.java
│   │   │   └── SistemaAcademicoApplication.java
│   │   └── resources/
│   │       └── application.yml
│   └── test/
│       ├── java/com/academico/
│       │   ├── controller/       # Testes de controller
│       │   │   └── AlunoControllerTest.java
│       │   └── service/          # Testes de service
│       │       ├── AlunoServiceTest.java
│       │       └── CursoServiceTest.java
│       └── scala/com/academico/
│           └── simulation/       # Testes de carga
│               └── SistemaAcademicoSimulation.scala
├── Dockerfile
└── pom.xml
```

## 📊 Diagrama de Entidades

```
┌─────────────────┐           ┌──────────────┐           ┌─────────────────┐
│     Aluno       │           │ aluno_curso  │           │     Curso       │
├─────────────────┤           ├──────────────┤           ├─────────────────┤
│ id (PK)         │───────────│ aluno_id (FK)│           │ id (PK)         │
│ nome            │     N     │ curso_id (FK)│     N     │ nome            │
│ email           │           └──────────────┘           │ cargaHoraria    │
│ matricula       │                                      └─────────────────┘
└─────────────────┘
```

### Relacionamento N:N

- Um **Aluno** pode estar matriculado em vários **Cursos**
- Um **Curso** pode ter vários **Alunos** matriculados
- A tabela intermediária `aluno_curso` gerencia o relacionamento

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Java 17 ou superior
- Maven 3.9+
- Docker e Docker Compose (para monitoramento)

### 1. Clonar o Repositório

```bash
git clone https://github.com/LilianCMartins/sistema-academico.git
cd sistema-academico/backend
```

### 2. Compilar o Projeto

```bash
./mvnw clean install
```

### 3. Rodar a Aplicação

```bash
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`

### 4. Acessar o Console H2

- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:academico`
- Username: `sa`
- Password: `password`

## 📄 Documentação da API (Swagger)

A documentação interativa da API é gerada automaticamente e está disponível em:

- **Swagger UI:** `http://localhost:8080/swagger-ui.html`
- **OpenAPI JSON:** `http://localhost:8080/v3/api-docs`

### Principais Endpoints

#### Alunos

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| GET | `/alunos` | Listar todos os alunos |
| GET | `/alunos/{id}` | Buscar aluno por ID |
| POST | `/alunos` | Criar novo aluno |
| PUT | `/alunos/{id}` | Atualizar aluno |
| DELETE | `/alunos/{id}` | Deletar aluno |
| GET | `/alunos/{id}/cursos` | Listar cursos do aluno |
| POST | `/alunos/{alunoId}/cursos/{cursoId}` | Matricular aluno em curso |
| DELETE | `/alunos/{alunoId}/cursos/{cursoId}` | Remover matrícula |

#### Cursos

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| GET | `/cursos` | Listar todos os cursos |
| GET | `/cursos/{id}` | Buscar curso por ID |
| POST | `/cursos` | Criar novo curso |
| PUT | `/cursos/{id}` | Atualizar curso |
| DELETE | `/cursos/{id}` | Deletar curso |
| GET | `/cursos/{id}/alunos` | Listar alunos do curso |

### Exemplos de Requisições

#### Criar Aluno

```bash
curl -X POST http://localhost:8080/alunos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "matricula": "2024001"
  }'
```

#### Criar Curso

```bash
curl -X POST http://localhost:8080/cursos \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Engenharia de Software",
    "cargaHoraria": 3200
  }'
```

#### Matricular Aluno em Curso

```bash
curl -X POST http://localhost:8080/alunos/1/cursos/1
```

## 🔒 Segurança e Autenticação

O projeto utiliza **Spring Security** com configuração flexível:

### Configuração Atual

- **Endpoints públicos liberados:** `/alunos/**`, `/cursos/**`, `/swagger-ui/**`, `/actuator/**`, `/h2-console/**`
- **CORS configurado** para permitir requisições do frontend
- **OAuth2 Resource Server** configurado para integração com Keycloak (opcional)

### Integração com Keycloak (Opcional)

Para habilitar autenticação com Keycloak:

1. Inicie o Keycloak via Docker:

```bash
docker run -p 8081:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest start-dev
```

2. Configure um realm chamado `sistema-academico`
3. Crie clients e usuários
4. Atualize o `application.yml` com as URLs corretas

## 📊 Monitoramento

### Spring Boot Actuator

Endpoints de monitoramento disponíveis:

- **Health:** `http://localhost:8080/actuator/health`
- **Metrics:** `http://localhost:8080/actuator/metrics`
- **Prometheus:** `http://localhost:8080/actuator/prometheus`
- **Info:** `http://localhost:8080/actuator/info`

### Prometheus e Grafana

#### 1. Iniciar Monitoramento com Docker Compose

Na raiz do projeto:

```bash
docker-compose up -d
```

Isso iniciará:
- **Backend:** `http://localhost:8082` (porta 8082 no host, 8080 no container)
- **Prometheus:** `http://localhost:9090`
- **Grafana:** `http://localhost:3000`

#### 2. Acessar Grafana

- URL: `http://localhost:3000`
- Login: `admin` / `admin`

#### 3. Configurar Dashboard

1. Acesse "Dashboards" → "Import"
2. Use o ID `4701` (Spring Boot Statistics) ou `11378` (JVM Micrometer)
3. Selecione o datasource Prometheus
4. Clique em "Import"

### Métricas Disponíveis

- `jvm_memory_used_bytes` - Uso de memória JVM
- `jvm_threads_live` - Threads ativas
- `http_server_requests_seconds_count` - Contagem de requisições HTTP
- `http_server_requests_seconds_sum` - Tempo total de requisições
- `system_cpu_usage` - Uso de CPU

## 🧪 Testes Unitários

O projeto inclui testes unitários completos para services e controllers.

### Executar Todos os Testes

```bash
./mvnw test
```

### Executar Testes Específicos

```bash
# Testes de Service
./mvnw test -Dtest=AlunoServiceTest
./mvnw test -Dtest=CursoServiceTest

# Testes de Controller
./mvnw test -Dtest=AlunoControllerTest
```

### Cobertura de Testes

Os testes cobrem:

- ✅ CRUD completo de Alunos e Cursos
- ✅ Validações de negócio (duplicação de matrícula/email/nome)
- ✅ Tratamento de exceções (ResourceNotFoundException, BusinessException)
- ✅ Relacionamento N:N (matrícula e remoção de matrícula)
- ✅ Validação de entrada (campos obrigatórios, formatos)

### Exemplo de Teste

```java
@Test
void createAluno_QuandoDadosValidos_DeveCriarAluno() {
    // Arrange
    when(alunoRepository.findByMatricula(anyString())).thenReturn(Optional.empty());
    when(alunoRepository.save(any(Aluno.class))).thenReturn(aluno);

    // Act
    AlunoDTO result = alunoService.createAluno(alunoDTO);

    // Assert
    assertNotNull(result);
    assertEquals("João Silva", result.getNome());
    verify(alunoRepository, times(1)).save(any(Aluno.class));
}
```

## 🚀 Testes de Carga e Stress (Gatling)

O projeto inclui testes de carga e stress usando **Gatling**, conforme requisito do documento.

### Cenários de Teste Implementados

1. **Listar Alunos** - 50 usuários em 10 segundos
2. **Buscar Aluno por ID** - 50 usuários em 10 segundos
3. **Listar Cursos** - 50 usuários em 10 segundos
4. **Buscar Curso por ID** - 50 usuários em 10 segundos
5. **Criar Aluno** - 20 usuários em 15 segundos
6. **Cenário Misto** - Navegação completa com 100 usuários

### Como Executar Testes de Carga

#### 1. Iniciar a Aplicação

```bash
./mvnw spring-boot:run
```

#### 2. Executar Gatling

Em outro terminal:

```bash
./mvnw gatling:test
```

### Relatórios Gatling

Após a execução, o relatório HTML será gerado em:

```
target/gatling/sistemaacademicosimulation-<timestamp>/index.html
```

Abra o arquivo no navegador para visualizar:

- **Tempo de resposta** (min, max, média, percentis)
- **Taxa de sucesso/erro**
- **Throughput** (requisições por segundo)
- **Gráficos de performance**

### Métricas Avaliadas

- ✅ Tempo máximo de resposta < 5 segundos
- ✅ Taxa de sucesso > 95%
- ✅ Throughput médio
- ✅ Percentis de resposta (p50, p75, p95, p99)

### Exemplo de Saída

```
================================================================================
---- Global Information --------------------------------------------------------
> request count                                        500 (OK=490    KO=10   )
> min response time                                     12 (OK=12     KO=45   )
> max response time                                   3245 (OK=3245   KO=156  )
> mean response time                                   234 (OK=231    KO=98   )
> std deviation                                        456 (OK=459    KO=32   )
> response time 50th percentile                        145 (OK=143    KO=89   )
> response time 75th percentile                        298 (OK=295    KO=112  )
> mean requests/sec                                  25.00 (OK=24.50  KO=0.50 )
================================================================================
```

## ☁️ Deploy no Render

### 1. Preparar Aplicação

O projeto já está configurado com `Dockerfile` para deploy.

### 2. Criar Conta no Render

Acesse [render.com](https://render.com) e crie uma conta.

### 3. Criar Novo Web Service

1. Clique em "New +" → "Web Service"
2. Conecte seu repositório GitHub
3. Configure:
   - **Name:** `sistema-academico-backend`
   - **Environment:** `Docker`
   - **Region:** Escolha a mais próxima
   - **Branch:** `master` ou `main`
   - **Dockerfile Path:** `backend/Dockerfile`

### 4. Variáveis de Ambiente (Opcional)

Se necessário, adicione variáveis de ambiente:

```
SPRING_PROFILES_ACTIVE=prod
SERVER_PORT=8080
```

### 5. Deploy

Clique em "Create Web Service" e aguarde o deploy.

A URL será algo como: `https://sistema-academico-backend.onrender.com`

### 6. Testar API em Produção

```bash
curl https://sistema-academico-backend.onrender.com/alunos
```

### 7. Acessar Swagger em Produção

```
https://sistema-academico-backend.onrender.com/swagger-ui.html
```

## 📝 Dados de Exemplo

A aplicação inicializa automaticamente com dados de exemplo:

### Cursos Pré-cadastrados

1. Engenharia de Software (3200h)
2. Ciência da Computação (3000h)
3. Sistemas de Informação (2800h)
4. Análise e Desenvolvimento de Sistemas (2400h)

### Alunos Pré-cadastrados

1. Maria Silva (matricula: 2024001) - Cursos: 1, 2
2. João Santos (matricula: 2024002) - Curso: 1
3. Ana Costa (matricula: 2024003) - Cursos: 3, 4
4. Pedro Oliveira (matricula: 2024004) - Cursos: 2, 3
5. Carla Mendes (matricula: 2024005) - Curso: 4

## 🐛 Troubleshooting

### Erro: Port 8080 already in use

```bash
# Encontrar processo usando a porta
lsof -i :8080

# Matar o processo
kill -9 <PID>
```

### Erro: Tests failing

```bash
# Limpar e recompilar
./mvnw clean install -DskipTests

# Executar testes novamente
./mvnw test
```

### Erro: Docker Compose não inicia

```bash
# Verificar logs
docker-compose logs

# Reiniciar serviços
docker-compose down
docker-compose up -d
```

## 📚 Referências

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html)
- [Spring Data JPA Documentation](https://docs.spring.io/spring-data/jpa/docs/current/reference/html)
- [Spring Security Documentation](https://docs.spring.io/spring-security/reference/index.html)
- [Springdoc OpenAPI Documentation](https://springdoc.org)
- [Spring Boot Actuator Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html)
- [Prometheus Documentation](https://prometheus.io/docs/introduction/overview)
- [Grafana Documentation](https://grafana.com/docs/grafana/latest)
- [Gatling Documentation](https://gatling.io/docs/gatling/reference/current)
- [Render Deployment Guide](https://render.com/docs/deploy-spring)

---

**Desenvolvido como parte da Prática Avaliativa: Sistema Acadêmico com Spring Boot 3, Segurança, Monitoramento, Testes e Deploy**
