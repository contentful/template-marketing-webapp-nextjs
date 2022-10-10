import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextBlockFieldsFragment } from '@ctf-components/ctf-text-block/__generated/ctf-text-block.generated';
import { CtfTextBlock } from '@ctf-components/ctf-text-block/ctf-text-block';

export default {
  title: 'Components/Text block',
  component: CtfTextBlock,
} as Meta;

const Template: Story<TextBlockFieldsFragment> = args => <CtfTextBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: 'Frequently Asked Questions',
  body: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'heading-3',
          content: [
            {
              nodeType: 'text',
              value: 'What do I need to open a Coin account? ',
              marks: [],
              data: {},
            },
          ],
          data: {},
        },
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value:
                'A free of charge IBAN account with a €100,000 deposit insurance guarantee is included in all Colorful Coin subscription plans. To open an account, sign up and follow the steps to complete personal identification verification process. To sign up for a card, you must provide credit score information or authorize Coin to access this information on your behalf.',
              marks: [],
              data: {},
            },
          ],
          data: {},
        },
      ],
    },
    links: {
      entries: { block: [], __typename: 'ComponentTextBlockBodyEntries' },
      assets: { block: [], __typename: 'ComponentTextBlockBodyAssets' },
      __typename: 'ComponentTextBlockBodyLinks',
    },
    __typename: 'ComponentTextBlockBody',
  },
};
