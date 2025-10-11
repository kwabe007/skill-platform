#!/bin/sh -ex

# This file is how the docker container starts the server Before starting, we need to run any prisma migrations that
# haven't yet been run, which is why this file exists.

pnpm --prefix migration exec payload migrate
HOSTNAME="0.0.0.0" node server.js
