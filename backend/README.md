# Backend: Sistema Acadêmico com Spring Boot 3

Este projeto implementa o backend de um Sistema Acadêmico, seguindo o princípio de ser **simples, mas completo**, conforme os requisitos de uma prática avaliativa. Ele inclui: JPA, Segurança (Security), Monitoramento (Actuator, Prometheus, Grafana) e Documentação (Swagger/OpenAPI).

## 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Função |
| :--- | :--- | :--- |
| **Framework** | Spring Boot 3 | Desenvolvimento rápido de APIs REST. |
| **Persistência** | Spring Data JPA / H2 | Gerenciamento de dados e banco de dados em memória. |
| **Segurança** | Spring Security | Autenticação HTTP Basic em memória. |
| **Monitoramento** | Actuator, Prometheus, Grafana | Coleta de métricas técnicas e visualização. |
| **Documentação** | Springdoc-OpenAPI (Swagger) | Geração automática de documentação da API. |
| **Orquestração** | Docker Compose | Gerenciamento do ambiente de monitoramento. |

## 📦 Estrutura do Projeto

O backend está contido na pasta `backend/`.

## 🛠️ Como Rodar Localmente

### Pré-requisitos

*   Java 17+
*   Maven
*   Docker e Docker Compose (para monitoramento)

### 1. Rodar Apenas a Aplicação (Sem Docker)

1.  Navegue até a pasta `backend/`.
2.  Execute o comando Maven para iniciar a aplicação:
    ```bash
    ./mvnw spring-boot:run
    ```
3.  A API estará disponível em `http://localhost:8080`.

### 2. Rodar com Monitoramento (Usando Docker Compose)

1.  Navegue até a pasta raiz do projeto (`sistema-academico/`).
2.  Execute o Docker Compose para construir a imagem do backend e iniciar o Prometheus/Grafana:
    ```bash
    docker-compose up --build -d
    ```
3.  **Aplicações Disponíveis:**
    *   **Backend API:** `http://localhost:8080`
    *   **Prometheus:** `http://localhost:9090`
    *   **Grafana:** `http://localhost:3000` (Login: `admin`/`admin`)

## 🔒 Segurança e Autenticação

O projeto utiliza **Spring Security** com autenticação **HTTP Basic** em memória.

*   **Usuário Padrão:** `user` / `password`
*   **Administrador:** `admin` / `admin`

Para acessar qualquer endpoint da API (exceto Swagger e Actuator), você deve fornecer essas credenciais.

## 📄 Documentação da API (Swagger)

A documentação interativa da API é gerada automaticamente pelo Springdoc-OpenAPI e está disponível em:

*   `http://localhost:8080/swagger-ui.html`

Você pode testar os endpoints diretamente na interface do Swagger, fornecendo as credenciais de autenticação.

## 📊 Monitoramento

O monitoramento é configurado via Docker Compose:

1.  **Actuator:** Expõe as métricas em `http://localhost:8080/actuator/prometheus`.
2.  **Prometheus:** Coleta as métricas do backend (serviço `backend:8080`).
3.  **Grafana:** Usa o Prometheus como fonte de dados. Você pode criar dashboards para visualizar métricas como `jvm_memory_used_bytes` ou `http_server_requests_seconds_count`.

## 🧪 Testes de Carga e Stress (Gatling)

Para cumprir o requisito de Testes de Carga, sugerimos o uso do **Gatling**, uma ferramenta moderna e baseada em Scala.

### Como Rodar Testes de Carga (Exemplo com Gatling)

1.  **Instalação:** Baixe e configure o Gatling (instruções no site oficial).
2.  **Cenário de Teste:** Crie um arquivo de simulação (`.scala`) que simule, por exemplo, 100 usuários acessando o endpoint `/alunos` simultaneamente, usando as credenciais de autenticação.
3.  **Execução:** Execute a simulação do Gatling.
4.  **Relatório:** O Gatling gerará um relatório HTML detalhado na pasta `target/gatling/`.

## ☁️ Deploy (Sugestão)

O projeto está pronto para ser empacotado como um JAR executável.

*   **Serviço Sugerido:** [Render](https://render.com/docs/deploy-spring)
*   **Instruções:** O Render pode ser configurado para construir o projeto a partir do seu repositório Git e executá-lo usando o comando `java -jar target/sistema-academico-backend-0.0.1-SNAPSHOT.jar`.

## 🔗 Referências

*   [Spring Boot Official Documentation](https://docs.spring.io/springboot/docs/current/reference/html)
*   [Spring Security Reference](https://docs.spring.io/springsecurity/reference/index.html)
*   [Springdoc-OpenAPI Documentation](https://springdoc.org)
*   [Gatling Load Testing Tool](https://gatling.io/docs/gatling/reference/current)
