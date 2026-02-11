FROM mcr.microsoft.com/playwright:v1.58.0-noble

ENV DEBIAN_FRONTEND=noninteractive
# Firefox path error
ENV HOME=/root

# Installing Java Temurin
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl ca-certificates gnupg \
 && mkdir -p /etc/apt/keyrings \
 && curl -fsSL https://packages.adoptium.net/artifactory/api/gpg/key/public \
    | gpg --dearmor -o /etc/apt/keyrings/adoptium.gpg \
 && echo "deb [signed-by=/etc/apt/keyrings/adoptium.gpg] https://packages.adoptium.net/artifactory/deb stable main" \
    > /etc/apt/sources.list.d/adoptium.list \
 && apt-get update \
 # JRE lighter than jdk
 && apt-get install -y --no-install-recommends temurin-21-jre \

 && java -version \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
