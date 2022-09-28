import { Story, Meta } from '@storybook/react';
import React from 'react';

import CtfInfoBlock, {
  CtfInfoBlockPropsInterface,
} from '@ctf-components/ctf-info-block/ctf-info-block';

export default {
  title: 'Components/Info block',
  component: CtfInfoBlock,
} as Meta;

const Template: Story<CtfInfoBlockPropsInterface> = args => <CtfInfoBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: 'Even more great features',
  block1Body: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [{ data: {}, marks: [], value: 'Exchange Rates', nodeType: 'text' }],
          nodeType: 'heading-3',
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Spend across borders with peace of mind thanks to the best exchange rate in 100+ currencies (we use the interbank exchange rate).',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    __typename: 'ComponentInfoBlockBlock1Body',
  },
  block1Image: {
    __typename: 'Asset',
    sys: { id: '6RXhV9aCkOGHRtvkAAQhNL', __typename: 'Sys' },
    contentType: 'image/svg+xml',
    title: 'Tax liability-estimates (1)',
    description: null,
    width: 377,
    height: 368,
    url: 'https://images.ctfassets.net/w8vf7dk7f259/6RXhV9aCkOGHRtvkAAQhNL/4eb06486b018f620cce51de1b2d07e58/Tax_liability-estimates__1_.svg',
  },
  block2Body: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Instant Transactions',
              nodeType: 'text',
            },
          ],
          nodeType: 'heading-3',
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Instantly send and request money from your friends and acquaintances within the Coin network. ',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    __typename: 'ComponentInfoBlockBlock2Body',
  },
  block2Image: {
    __typename: 'Asset',
    sys: { id: '7IhsDLG4vu2tVJTvWRo3SJ', __typename: 'Sys' },
    contentType: 'image/svg+xml',
    title: 'dashboard',
    description: null,
    width: 377,
    height: 368,
    url: 'https://images.ctfassets.net/w8vf7dk7f259/7IhsDLG4vu2tVJTvWRo3SJ/a276dbd13de15e4ac4138d30ef8d6032/dashboard.svg',
  },
  block3Body: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'Cashback and rewards',
              nodeType: 'text',
            },
          ],
          nodeType: 'heading-3',
        },
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'Get instant discounts from well-known brands and up to 3% cashback on your regular shopping.',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    __typename: 'ComponentInfoBlockBlock3Body',
  },
  block3Image: {
    __typename: 'Asset',
    sys: { id: '2U8G6vBUgwugmUq0o7ieyR', __typename: 'Sys' },
    contentType: 'image/svg+xml',
    title: 'shopping-cart',
    description: null,
    width: 377,
    height: 368,
    url: 'https://images.ctfassets.net/w8vf7dk7f259/2U8G6vBUgwugmUq0o7ieyR/b74fae760a4cea62f59ad9ef5684f574/shopping-cart.svg',
  },
};
