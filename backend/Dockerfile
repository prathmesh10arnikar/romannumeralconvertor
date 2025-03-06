# FROM openjdk:17-jdk-slim as builder
#
# WORKDIR /app
#
# COPY gradle /app/gradle
# COPY build.gradle /app/
# COPY settings.gradle /app/
#
# COPY src /app/src
#
# COPY gradlew /app/
# COPY gradle/wrapper /app/gradle/wrapper
#
# RUN ./gradlew build -x test
#
# FROM openjdk:17-jdk-slim
#
# WORKDIR /app
#
# COPY --from=builder /app/build/libs/*.jar /app/app.jar
#
# # Expose the port your application
# EXPOSE 8080
#
# # Run the JAR file
# ENTRYPOINT ["java", "-jar", "/app/app.jar"]
