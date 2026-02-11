FROM mcr.microsoft.com/playwright:v1.58.0-noble

ENV DEBIAN_FRONTEND=noninteractive
ENV HOME=/root

RUN apt-get update \
 && apt-get install -y --no-install-recommends wget apt-transport-https gpg ca-certificates \
 && wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public \
    | gpg --dearmor -o /etc/apt/keyrings/adoptium.gpg \
 && echo "deb [signed-by=/etc/apt/keyrings/adoptium.gpg] https://packages.adoptium.net/artifactory/deb $(. /etc/os-release; echo $VERSION_CODENAME) main" \
    > /etc/apt/sources.list.d/adoptium.list \
 && apt-get update \
 && apt-get install -y --no-install-recommends temurin-21-jdk \
 && java -version \
 && rm -rf /var/lib/apt/lists/*
