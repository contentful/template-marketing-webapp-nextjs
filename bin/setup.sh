#!/bin/bash
for arg in "$@"
do
    case $arg in
        spaceId=*)
            spaceId="${arg#*=}"
            ;;
        deliveryToken=*)
            deliveryToken="${arg#*=}"
            ;;
        previewToken=*)
            previewToken="${arg#*=}"
            ;;
    esac
done
cp .env.example .env

awk -v spaceId="$spaceId" -v deliveryToken="$deliveryToken" -v previewToken="$previewToken" '{
  if ($1 == "NEXT_PUBLIC_CONFIG_CONTENTFUL_SPACE_ID=") {
    print $1 spaceId;
  } else if ($1 == "NEXT_PUBLIC_CONFIG_CONTENTFUL_DELIVERY_API_TOKEN=") {
    print $1 deliveryToken;
  } else if ($1 == "NEXT_PUBLIC_CONFIG_CONTENTFUL_PREVIEW_API_TOKEN=") {
    print $1 previewToken;
  } else {
    print;
  }
}' .env > .env.new && mv .env.new .env

echo Installing dependencies
yarn
yarn dev
