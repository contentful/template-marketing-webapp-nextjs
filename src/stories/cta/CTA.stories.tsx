import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CtaFieldsFragment } from '@ctf-components/ctf-cta/__generated/ctf-cta.generated';
import { CtfCta } from '@ctf-components/ctf-cta/ctf-cta';
import Wrapper from '@src/stories/Wrapper';

export default {
  title: 'Components/CTA',
  component: CtfCta,
} as Meta;

const Template: Story<CtaFieldsFragment> = args => (
  <Wrapper>
    <CtfCta {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  headline: 'Big dreams start with a simple plan',
  subline: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: 'The Classic card helps you manage your money and save with confidence',
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    __typename: 'ComponentCtaSubline',
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
