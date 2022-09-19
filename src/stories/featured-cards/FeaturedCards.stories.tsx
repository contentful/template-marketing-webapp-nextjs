import { Story, Meta } from '@storybook/react';
import React from 'react';

import CtfFeaturedCards, {
  CtfFeaturedCardsPropsType,
} from '@ctf-components/ctf-featured-cards/ctf-featured-cards';
import Wrapper from '@src/stories/Wrapper';

export default {
  title: 'Components/Featured cards',
  component: CtfFeaturedCards,
} as Meta;

const Template: Story<CtfFeaturedCardsPropsType> = (args) => (
  <Wrapper>
    <CtfFeaturedCards {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  featuredPostsCollection: {
    __typename: 'ComponentFeaturedCardsFeaturedPostsCollection',
    items: [
      {
        sys: {
          __typename: 'Sys',
          id: '123',
        },
        __typename: 'Post',
        featuredImage: {
          __typename: 'Asset',
          sys: { id: '4MtHvC2Qn9CsbKD7pDOihk', __typename: 'Sys' },
          contentType: 'image/jpeg',
          title: 'Mobile app / editorial shot',
          description: null,
          width: 1210,
          height: 807,
          url:
            'https://images.ctfassets.net/w8vf7dk7f259/4MtHvC2Qn9CsbKD7pDOihk/9e48b4e6a181dd8fcb0ad99ec5c335a3/AdobeStock_322589948.jpg',
        },
        postName: 'Introducing the Coin mobile app',
        author: {
          __typename: 'TopicPerson',
          sys: { id: '69SovCQSVb5jq48a3poNfQ', __typename: 'Sys' },
          internalName: null,
          name: 'Daisy-May Jacobson',
          bio: null,
          avatar: null,
          website: null,
          location: null,
          cardStyle: true,
        },
        internalName: null,
        publishedDate: '',
        slug: 'introducing-the-coin-mobile-app',
        introText: null,
        body: null,
        category: null,
        extraSectionCollection: null,
      },
    ].reduce((_prev, current) => {
      return [current, current, current];
    }, [] as any),
  },
};
