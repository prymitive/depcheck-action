#!/bin/sh -lx

if [ "$2" != "" ]; then
    CONFIG="--config=$2"
fi

/depcheck/node_modules/.bin/depcheck $CONFIG "$1"
