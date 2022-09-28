import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DuplexFieldsFragment } from '@ctf-components/ctf-duplex/__generated/ctf-duplex.generated';
import { CtfDuplex } from '@ctf-components/ctf-duplex/ctf-duplex';

export default {
  title: 'Components/Duplex',
  component: CtfDuplex,
} as Meta;

const Template: Story<DuplexFieldsFragment> = args => <CtfDuplex {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: {
    __typename: 'Asset',
    sys: { id: '3WhS7USw34ORhdEQxFiXwX', __typename: 'Sys' },
    contentType: 'image/jpeg',
    title: 'AdobeStock 325033979 (1)',
    description: null,
    width: 2184,
    height: 1458,
    url: 'https://images.ctfassets.net/vcoy0j5vv99r/3WhS7USw34ORhdEQxFiXwX/bf30fdf8c038719e3677413d87919006/AdobeStock_325033979__1_.jpg',
  },
  imageStyle: true,
  headline: 'Discover a whole new world of travel',
  bodyText: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value:
                'With borderless accounts, free ATM withdrawals abroad and 24/7 customer service, Coin makes traveling the easiest it’s ever been. Upgrade your account and join the jet-set crowd.',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    __typename: 'ComponentDuplexBodyText',
  },
  targetPage: {
    __typename: 'Page',
    slug: 'classic-card',
    sys: { id: '3Qnjx9WkvM4ZC44AIBDZwt', __typename: 'Sys' },
    pageContent: {
      __typename: 'TopicProduct',
      sys: { id: '4iZO00YnKE8I8c90VIUuhN', __typename: 'Sys' },
    },
  },
  ctaText: 'View details',
};
