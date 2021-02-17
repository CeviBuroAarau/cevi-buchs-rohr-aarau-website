# cevi-buro-aarau-website

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

### Run with docker

docker build -t cevi-buchs-rohr/website .
docker run -it -p 8080:80 --rm --name cevi-buchs-rohr-website cevi-buchs-rohr/website

The webpage is then available under localhost:8080

### Demo (on Heroku)

https://cevi-buchs-rohr-aarau-webpage.herokuapp.com/
