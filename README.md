# Welcome to NomadicJS Atom Helpers

## To set env variables from .env file

source <(sed -E -n 's/[^#]+/export &/ p' .env)