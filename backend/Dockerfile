# Estágio de Build
FROM maven:3.9.5-eclipse-temurin-17-alpine AS build
WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Estágio de Execução
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Configura timezone brasileiro (opcional, mas recomendado)
ENV TZ=America/Sao_Paulo

# Nome do JAR (ajuste se necessário)
ARG JAR_NAME="sistema-academico-backend-0.0.1-SNAPSHOT.jar"

COPY --from=build /app/target/${JAR_NAME} app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-Xms256m", "-Xmx512m", "-jar", "app.jar"]
