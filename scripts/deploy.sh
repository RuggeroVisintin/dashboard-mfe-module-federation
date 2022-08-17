#!/bin/bash

echo "Deploying to $1"

aws s3 cp ./dist/dashboard-mfe-module-federation $1 --recursive

echo "Deployment complete!"
