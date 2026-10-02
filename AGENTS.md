# AGENTS.md

This is the `main-private` branch of Contentful's open-source Marketing Starter Template. It builds the hosted demo of the template, a Next.js app that renders content from a Contentful space. Changes branch from `main-private` with a `PRIVATE-BRANCH` prefix and merge back into it. See `README.md` for setup and `ARCHITECTURE.md` for how the code is laid out.

## Working in this repository

- Use Node.js as set in `package.json` `engines` (and `.nvmrc` where present) and Yarn 1. npm is not supported.
- Install with `yarn install --frozen-lockfile`. Some `@contentful` packages come from GitHub Packages and need a token with `read:packages`.
- Check changes with `yarn lint`, `yarn type-check`, and `yarn build`.
- Local runs need the Contentful environment variables listed in `.env.example`, copied into a `.env` file.
- Regenerate the GraphQL SDK with `yarn graphql-codegen:generate` after changing `.graphql` files; don't edit `src/lib/__generated/` by hand.
- Follow the commit message and code style rules in `CONTRIBUTING.md`.
- Keep changes focused. Template users copy this code, so prefer clear, conventional Next.js patterns over clever ones.
