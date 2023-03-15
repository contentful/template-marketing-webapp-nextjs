#!/bin/bash
echo Creating .env file
echo BUNDLE_ANALYZE=false >> .env
echo ENVIRONMENT_NAME=local >> .env
echo NEXT_PUBLIC_CONFIG_CONTENTFUL_META_URL=http://localhost:3000 >> .env
echo NEXT_PUBLIC_CONFIG_CONTENTFUL_META_TITLE= >> .env
echo NEXT_PUBLIC_CONFIG_CONTENTFUL_META_DESCRIPTION= >> .env
echo NEXT_PUBLIC_CONFIG_CONTENTFUL_SPACE_ID=${spaceId} >> .env
echo NEXT_PUBLIC_CONFIG_CONTENTFUL_DELIVERY_API_TOKEN=${deliveryToken} >> .env
echo NEXT_PUBLIC_CONFIG_CONTENTFUL_PREVIEW_API_TOKEN=${previewToken} >> .env
echo Prefilled .env file
echo Installing dependencies
yarn
yarn dev

