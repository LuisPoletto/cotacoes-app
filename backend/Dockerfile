FROM eclipse-temurin:17-jre

WORKDIR /app

COPY build/libs/cotacoes-app-0.1-all.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
