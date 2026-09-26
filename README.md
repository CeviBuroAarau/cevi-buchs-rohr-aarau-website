# Webpage of Cevi Buchs-Rohr Aarau

The official webpage that you find under https://www.cevi-buro-aarau.ch

Metrics: 
[![Buildstatus](https://github.com/patrickuhlmann/cevi-buchs-rohr-aarau-website/workflows/Build%20Main/badge.svg)](https://github.com/patrickuhlmann/cevi-buchs-rohr-aarau-website/actions/workflows/build_main.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cevi-buchs-rohr-aarau-website&metric=coverage)](https://sonarcloud.io/dashboard?id=cevi-buchs-rohr-aarau-website)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=cevi-buchs-rohr-aarau-website&metric=ncloc)](https://sonarcloud.io/dashboard?id=cevi-buchs-rohr-aarau-website)

## Getting started
```
nvm use 26
npm install
npm run serve
```

The webpage is then available under localhost:8080

### Create the build and run the tests

```
npm run build
npm run test:unit
npm run test:e2e
```

A coverage report is generated in the folder coverage and tests/e2e/reports

### Run offline

Run a mock of the backend (`api/Backend.yaml` describes the parts of the Payload API the webpage uses, with real
responses as examples):
```
docker run --init --rm -v $(pwd):/tmp -p 4010:4010 stoplight/prism:4 mock -h 0.0.0.0 "/tmp/api/Backend.yaml"
```

Run the webpage against it:
```
npm install
VITE_BACKEND_URL=http://localhost:4010 npm run serve
```

The webpage is then available under localhost:8080

Note: images and files are still loaded from `cms.cevi-buro-aarau.ch`, and the mock ignores filters, so the agenda
also shows past events.

### Backend

The content comes from a Payload backend (`VITE_BACKEND_URL`, default `https://cms.cevi-buro-aarau.ch`). It needs no
token: anonymous requests may read the published content and submit the three forms. The backend only accepts
requests from the origins configured in its `CORS_ORIGINS`, so a local backend has to allow `http://localhost:8080`.

### Build the docker image locally

```
docker build -t cevi-buchs-rohr-aarau-website:latest .
```

### Docker image tags

| Tag | Description                                                    |
|-----|----------------------------------------------------------------|
| `stable` | Latest stable release (updated on every release)               |
| `v1`, `v1.0`, `v1.0.2` | Specific stable release — major, major.minor, or exact version |
| `edge` | Latest build from the main branch (may be unstable)            |

To run the latest stable image:
```
docker run -it -p 8080:80 --rm --name cevi-buchs-rohr-aarau-website ghcr.io/ceviburoaarau/cevi-buchs-rohr-aarau-website:stable
```

The webpage is then available under localhost:8080
