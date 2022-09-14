/* eslint-disable no-console */
require('dotenv').config();

import fs from 'fs';
import path from 'path';
import getContentfulConfig from '../src/get-contentful-config';
import { createCfulUrl, introspect } from '../src/lib/init-apollo';

const OUT = 'introspection';

const contentfulConfig = getContentfulConfig();

async function start() {
  const items = [
    {
      url: createCfulUrl(
        contentfulConfig.contentful.main_space_id,
        contentfulConfig.contentful.main_space_token,
      ),
      targetFilename: 'main-introspection.json',
    },
    {
      url: createCfulUrl(
        contentfulConfig.contentful.legal_space_id,
        contentfulConfig.contentful.legal_space_token,
      ),
      targetFilename: 'legal-introspection.json',
    },
  ];

  const time = new Date().getTime();
  for (const item of items) {
    try {
      console.log(`fetching introspecton from ${item.url}`);
      // eslint-disable-next-line no-await-in-loop
      const introspection = await introspect(item.url);
      if (introspection) {
        saveIntrospection(introspection, item.targetFilename);
      } else {
        console.warn(`could not fetch introspection for ${item.url}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
  console.log(`elapsed`, `${(new Date().getTime() - time) / 1000}s`);
}

function saveIntrospection(object: any, filename: string) {
  const outDir = path.join(process.cwd(), OUT);
  const filepath = path.join(outDir, filename);
  try {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
    fs.writeFileSync(filepath, JSON.stringify(object, null, 2), 'utf8');
  } catch (err) {
    console.error(`error writing file ${filepath}:`, err);
  }
}

start();
