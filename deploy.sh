#!/usr/bin/env sh
# abort on errors
set -e

git add .
git commit -m $1 --no-verify
git push -f git@github.com:arvidbt/portfolio.git