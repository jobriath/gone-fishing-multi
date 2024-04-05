#!/bin/bash

set -ex

rm -rf dist/
mkdir -p dist/
yarn esbuild --bundle src/server/server.ts --outdir=dist --minify --sourcemap --platform=node
