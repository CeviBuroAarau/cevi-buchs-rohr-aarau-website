# Webpage of Cevi Buchs-Rohr Aarau

The official webpage that you find under https://www.cevi-buro-aarau.ch

Metrics: 
[![Buildstatus](https://github.com/patrickuhlmann/cevi-buchs-rohr-aarau-website/workflows/Build%20Main/badge.svg)](https://github.com/patrickuhlmann/cevi-buchs-rohr-aarau-website/actions/workflows/build_main.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cevi-buchs-rohr-aarau-website&metric=coverage)](https://sonarcloud.io/dashboard?id=cevi-buchs-rohr-aarau-website)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=cevi-buchs-rohr-aarau-website&metric=ncloc)](https://sonarcloud.io/dashboard?id=cevi-buchs-rohr-aarau-website)

Note: 
  * node > 22 not supported
  * prettier > 2 not supported
  * typescript > 4 not supported
  * jest > 27 not supported
  * jspdf > 2 not supported


## Getting started
```
nvm use 22
yarn install
yarn serve
```

The webpage is then available under localhost:8080

### Create the build and run the tests

In order to create a production ready build, you need at minimum to specify a valid sentry authentication token. Create a file .env.local and put this line inside:
SENTRY_AUTH_TOKEN=***

Replace *** with your [token](https://sentry.io/settings/account/api/auth-tokens/) with the scope project:write. 

```
yarn build
yarn test:unit
yarn test:e2e
```

A coverage report is generated in the folder coverage and tests/e2e/reports

### Run offline

Run a mock of the backend:
```
docker run --init --rm -v $(pwd):/tmp -p 4010:4010 stoplight/prism:4 mock -h 0.0.0.0 "/tmp/api/Backend.yaml"
``` 

Run the webpage:
```
sed -i 's#VUE_APP_COCKPIT_API=https://cockpit.cevi-buro-aarau.ch/api/#VUE_APP_COCKPIT_API=http://localhost:4010/#g' .env
yarn install
yarn serve
```

The webpage is then available under localhost:8080

Note: it will fail to load the images/files but it will be able to execute all api calls.

### Run with docker

```
docker build -t cevi-buchs-rohr/website .
docker run -it -p 8080:80 --rm --name cevi-buchs-rohr-website cevi-buchs-rohr/website
```

The webpage is then available under localhost:8080
