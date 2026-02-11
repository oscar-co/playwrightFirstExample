# playwright-java (GHCR) package available

Docker image based on the official Playwright image, with Eclipse Temurin Java installed to support Allure report generation (via `npx allure-commandline`).

## Image
- `ghcr.io/oscar-co/playwright-java:1.58.0-noble`
- `ghcr.io/oscar-co/playwright-java:latest`

## What’s included
- Base: `mcr.microsoft.com/playwright:v1.58.0-noble`
- Playwright browsers + OS deps (from official image)
- Java: Eclipse Temurin 21 (JDK) installed
- Fix for Firefox in GitHub Actions containers: `HOME=/root`

## Usage in GitHub Actions
```yml
jobs:
  test:
    runs-on: ubuntu-latest
    container:
      image: ghcr.io/oscar-co/playwright-java:1.58.0-noble
    env:
      HOME: /root
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx playwright test
      - if: always()
        run: npx allure-commandline generate allure-results --clean -o allure-report
