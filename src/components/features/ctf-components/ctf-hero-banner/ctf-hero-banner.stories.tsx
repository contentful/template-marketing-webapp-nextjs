import { Story, Meta } from '@storybook/react';
import React from 'react';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';
import { CtfHeroBanner } from './ctf-hero-banner';

export default {
  title: 'Components/Hero banner',
  component: CtfHeroBanner,
} as Meta;

const Template: Story<HeroBannerFieldsFragment> = args => <CtfHeroBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: {
    __typename: 'Asset',
    sys: { id: '2R3XKDFbKHNzUoZTQU2LaE', __typename: 'Sys' },
    contentType: 'image/jpeg',
    title: 'Modern-banking',
    description: null,
    width: 2500,
    height: 971,
    url: 'https://images.ctfassets.net/w8vf7dk7f259/2R3XKDFbKHNzUoZTQU2LaE/d6e8f999b3159b81e81e372c71726be0/Modern-banking.jpg',
  },
  headline: 'We wanted banking to be simple. So we rebuilt it from the ground up.',
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
                'Coin cards offer great rates, personalized services, and exclusive perks helping you manage your money with confidence.',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    __typename: 'ComponentHeroBannerBodyText',
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
