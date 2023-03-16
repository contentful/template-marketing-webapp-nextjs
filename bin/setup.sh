#!/bin/bash

# Check if .env file already exists
if [ -f .env ]; then
  echo ".env file already exists. Please remove it first."
  exit 1
fi

# Check if .env.example file exists
if [ ! -f .env.example ]; then
  echo ".env.example file does not exist. Please create one."
  exit 1
fi

# Copy .env.example to .env
cp .env.example .env

# Read the values of the variables from command-line arguments
for arg in "$@"; do
  key=$(echo "$arg" | cut -d'=' -f1)
  value=$(echo "$arg" | cut -d'=' -f2)
  sed -i.bak -e "s/^${key}=.*/${key}=${value}/" .env
done

# install node_modules and run dev
echo Installing dependencies
yarn
yarn dev