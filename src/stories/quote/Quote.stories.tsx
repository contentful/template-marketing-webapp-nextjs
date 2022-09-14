import React from 'react';
import { Story, Meta } from '@storybook/react';
import CtfQuote, {
  CtfQuotePropsInterface,
} from '@ctf-components/ctf-quote/ctf-quote';
import Wrapper from '@src/stories/Wrapper';

export default {
  title: 'Components/Quote',
  component: CtfQuote,
} as Meta;

const Template: Story<CtfQuotePropsInterface> = (args) => (
  <Wrapper>
    <CtfQuote {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  image: {
    __typename: 'Asset',
    sys: { id: '5glXQfLUw22svg3imrpaQh', __typename: 'Sys' },
    contentType: 'image/jpeg',
    title: 'Got-banking-Now-you-do',
    description: null,
    width: 2500,
    height: 1667,
    url:
      'https://images.ctfassets.net/w8vf7dk7f259/5glXQfLUw22svg3imrpaQh/a7c6e9ff29b011c22c5f9b6dab949783/Got-banking-Now-you-do.jpg',
  },
  imagePosition: true,
  quote: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "I can't recommend Coin enough. If you’re tired of having to deal with unfriendly bank staff, long lines and ungodly opening hours, this is the bank for you.",
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'blockquote',
        },
        {
          data: {},
          content: [
            { data: {}, marks: [], value: '—  ', nodeType: 'text' },
            {
              data: {},
              marks: [{ type: 'bold' }],
              value: 'Megan Trejo',
              nodeType: 'text',
            },
            { data: {}, marks: [], value: ', Madrid, Spain', nodeType: 'text' },
          ],
          nodeType: 'paragraph',
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph',
        },
        {
          data: {},
          content: [{ data: {}, marks: [], value: '', nodeType: 'text' }],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    },
    links: {
      entries: { block: [], __typename: 'ComponentQuoteQuoteEntries' },
      assets: { block: [], __typename: 'ComponentQuoteQuoteAssets' },
      __typename: 'ComponentQuoteQuoteLinks',
    },
    __typename: 'ComponentQuoteQuote',
  },
  quoteAlignment: false,
};
