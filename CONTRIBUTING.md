# Introduction

We appreciate any community contributions to this project, whether in the form of issues or Pull Requests.

This document outlines what we'd like you to follow in terms of commit messages and code style.

It also explains what to do in case you want to set up the project locally.

If you have any questions or concerns please reach out to us either by filing an issue in the relevant repository or posting in the [Contentful Community Slack](https://www.contentful.com/slack/).

## Setup
This project is built on top of [Next.js](https://nextjs.org/), for more information on what exact version we recommend checking the `package.json`. 

Run `yarn install` to install all necessary dependencies. `yarn dev` starts a local development server. It is recommended to use the Node version listed in the `.nvmrc` file. Tools like [nvm](https://github.com/nvm-sh/nvm) let you easily switch between Node versions.

All necessary dependencies are installed under `node_modules` and any necessary tools can be accessed via npm scripts. There is no need to install anything globally.

## Environment variables
To consume the Contentful APIs the endpoint needs the following values:
- Space ID (a unique identifier for your Contentful Space): https://www.contentful.com/help/find-space-id/
- CDA token (an access token for Contentful's Delivery API): https://www.contentful.com/developers/docs/references/content-delivery-api/
- CPA token (an access token for Contentful's Preview API): https://www.contentful.com/developers/docs/references/content-preview-api/

After setting up the project, create a `.env` file from the `.env.example` and add the correct values. Make sure to restart the dev-server afterwards.

## Code generation
This projects makes use of [graphql-codegen](https://www.the-guild.dev/graphql/codegen) to generate [React Query](https://tanstack.com/query/v4/) hooks that are used in the frontend. The data for the hooks is pre-fetched on the serverside. For more information on how this data is hydrated please read https://tanstack.com/query/v4/docs/guides/ssr#using-hydration

In order to (re-)generate the GraphQL schema, types and hooks please use either of the following commands: 
- `yarn graphql-codegen:generate` generates a schema, types and code to fetch data from the Contentful APIs
- `yarn graphql-codegen:watch` similar to the `generate` command, but it runs as a watch task which will rerun the steps when changes are made in the .graphql files

## How Can I Contribute?
Before creating a new issue; please check out the open issues as someone might have already created one for you! Please use the recommended templates for each section as helps us resolve issues faster.

### Reporting Bugs
Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). If you are sure there's currently not an issue that describes the bug you're experiencing, create an issue on the repository and provide the following information by filling in [the template](https://github.com/contentful/template-marketing-webapp-nextjs/tree/main/.github/ISSUE_TEMPLATE/bug-report.md).

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

### Proposals
Want to make an enhancement proposal, including completely new features and minor improvements to existing functionality? Please create an issue with [the proposal template](https://github.com/contentful/template-marketing-webapp-nextjs/tree/main/.github/ISSUE_TEMPLATE/proposal.md).

### General feedback
Not experiencing a bug or wanting to make a proposal, but still want to reach out? A lot of our colleagues are hanging out in [Contentful Community Slack](https://www.contentful.com/slack/) and might be able to help. Can't find your answer there? You can file a feedback issue through [this template](https://github.com/contentful/template-marketing-webapp-nextjs/tree/main/.github/ISSUE_TEMPLATE/feedback.md).

## Pull Requests

The process described here has several goals:

- Maintain the quality of the repository
- Fix problems that are important to users
- Enable a sustainable system for the maintainers from Contentful to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](https://github.com/contentful/template-marketing-webapp-nextjs/tree/main/.github/PULL_REQUEST_TEMPLATE.md)
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.
