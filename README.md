# Webpage of Cevi Buchs-Rohr Aarau

The official webpage that you find under https://www.cevi-buro-aarau.ch

Metrics: 
[![Buildstatus](https://github.com/patrickuhlmann/cevi-buchs-rohr-aarau-website/workflows/Main/badge.svg)](https://github.com/patrickuhlmann/cevi-buchs-rohr-aarau-website/actions/workflows/main.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=cevi-buchs-rohr-aarau-website&metric=coverage)](https://sonarcloud.io/dashboard?id=linediff)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=cevi-buchs-rohr-aarau-website&metric=ncloc)](https://sonarcloud.io/dashboard?id=linediff)



## Getting started
```
yarn install
yarn serve
```

The webpage is then available under localhost:8080

### Create the build and run the tests
```
yarn build
yarn test:unit
yarn test:e2e
```

A coverage report is generated in the folder coverage


### Run with docker

```
docker build -t cevi-buchs-rohr/website .
docker run -it -p 8080:80 --rm --name cevi-buchs-rohr-website cevi-buchs-rohr/website
```

The webpage is then available under localhost:8080

### Demo (on Heroku)

https://cevi-buchs-rohr-aarau-webpage.herokuapp.com/
