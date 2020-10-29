#!/usr/bin/env bash

npm run build

app=seed-nginx-vue

cf push $app \
    -m 64M \
    -k 128M \
    -b https://github.com/cloudfoundry/nginx-buildpack.git \
    --no-start

cf start $app
