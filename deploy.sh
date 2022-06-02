#!/usr/bin/env bash

# abort on errors
set -e

git add .
git commit -m "$@" --no-verify
git push -f git@github.com:arvidbt/portfolio.git