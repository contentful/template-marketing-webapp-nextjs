import { Story, Meta } from '@storybook/react';

import { ProductTableFieldsFragment } from './__generated/ctf-product-table.generated';

import { CtfProductTable } from '@ctf-components/ctf-product-table/ctf-product-table';

export default {
  title: 'Components/Product table',
  component: CtfProductTable,
} as Meta;

const Template: Story<ProductTableFieldsFragment> = args => <CtfProductTable {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: 'Credit Card Just Got Upgraded',
  subline: 'Open a free account and apply for a card online',
  productsCollection: {
    items: [
      {
        sys: { id: '4iZO00YnKE8I8c90VIUuhN', __typename: 'Sys' },
        name: 'Coin Classic',
        featuredImage: {
          __typename: 'Asset',
          sys: { id: '3tfemZitZGCb42qEfO1ipW', __typename: 'Sys' },
          contentType: 'image/png',
          title: 'GoCoin Classic Product shot',
          description: null,
          width: 1200,
          height: 630,
          url: 'https://images.ctfassets.net/w8vf7dk7f259/3tfemZitZGCb42qEfO1ipW/458edd56f29ca699742a29d6575d5fc9/classic.png',
        },
        description: {
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
                      'Stay on top of your finances and get personalized tips based on your spending patterns.\n',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          __typename: 'TopicProductDescription',
        },
        price: 7.99,
        featuresCollection: {
          items: [
            {
              sys: { id: '6fQD1Weqn7HctXcuZLWZa7', __typename: 'Sys' },
              name: 'Free account',
              longDescription: {
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
                            'Each Coin account comes with a free savings account and the EU-backed deposit insurance guarantee for the funds up to €100,000.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Free IBAN account with a €100,000 deposit insurance guarantee',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '41alIf28bCm3fElnzhwIIb', __typename: 'Sys' },
              name: 'Instant transfers',
              longDescription: {
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
                            'Instantly send, receive or request money from anyone using the Coin app. No need to request account numbers, you can wire money with an email or phone number of the recipient.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Free, instant money transfers within the Coin network',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '6sZlbnNbXOFLB3CLtaG3uq', __typename: 'Sys' },
              name: 'Currency conversions',
              longDescription: {
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
                            'Coin uses the interbank exchange fee giving you the best possible rate on the purchases in 100+ foreign currencies. ',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Currency conversion at the interbank exchange rate',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '2MjvmUBPCuLTxj3Vdheojm', __typename: 'Sys' },
              name: 'Special offers',
              longDescription: {
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
                            'Receive personalized offers and discounts from Coin partners: from Uber rides to gas stations, Starbucks to Wholesale Clubs as well as advance tickest to premier sporting events, concerts, and cultural shows.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Receive personalized offers and discounts from Coin partners',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: 'sgpsMiv7AtzWsqt9T1Edf', __typename: 'Sys' },
              name: 'Card design',
              longDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Contactless credit card, choose from five colorful designs',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Contactless credit card, choose from five colorful designs',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '4eX9tqXH7tAZr967OFqmmg', __typename: 'Sys' },
              name: 'ATM withdrawals',
              longDescription: {
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
                            'Up to €500/month free ATM withdrawals in the EU and N.America. Withdrawals over the monthly limit incur a 0.9% fee. ',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Up to €500/month free ATM withdrawals in the EU and N.America',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
          ],
          __typename: 'TopicProductFeaturesCollection',
        },
        __typename: 'TopicProduct',
      },
      {
        sys: { id: '5BfEkkNsrAGLLJQukwIjrJ', __typename: 'Sys' },
        name: 'Coin Black',
        featuredImage: {
          __typename: 'Asset',
          sys: { id: '4s8qZjpP5qBvxgMwSlqPLr', __typename: 'Sys' },
          contentType: 'image/png',
          title: 'GoCoin Black product shot',
          description: null,
          width: 1200,
          height: 630,
          url: 'https://images.ctfassets.net/w8vf7dk7f259/4s8qZjpP5qBvxgMwSlqPLr/bbc2fcecdfe1ad55aeea6841584a9610/black.png',
        },
        description: {
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
                      'Enjoy free miles, partner discounts, comprehensive insurance and unique travel perks.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          __typename: 'TopicProductDescription',
        },
        price: 14.99,
        featuresCollection: {
          items: [
            {
              name: 'Free account',
              longDescription: {
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
                            'Each Coin account comes with a free savings account and the EU-backed deposit insurance guarantee for the funds up to €100,000.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Free IBAN account with a €100,000 deposit insurance guarantee',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              name: 'Instant transfers',
              longDescription: {
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
                            'Instantly send, receive or request money from anyone using the Coin app. No need to request account numbers, you can wire money with an email or phone number of the recipient.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Free, instant money transfers within the Coin network',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              name: 'Currency conversions',
              longDescription: {
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
                            'Coin uses the interbank exchange fee giving you the best possible rate on the purchases in 100+ foreign currencies. ',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Currency conversion at the interbank exchange rate',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              name: 'Special offers',
              longDescription: {
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
                            'Receive personalized offers and discounts from Coin partners: from Uber rides to gas stations, Starbucks to Wholesale Clubs as well as advance tickest to premier sporting events, concerts, and cultural shows.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Receive personalized offers and discounts from Coin partners',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '1NoAzQOubK9yoTk4chu1yd', __typename: 'Sys' },
              name: 'Card design',
              longDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Contactless credit card in premium, black finish',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Contactless credit card in premium, black finish',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '3KREKCeDxNxMxRHUAm6zk2', __typename: 'Sys' },
              name: 'ATM withdrawals',
              longDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Up to €2,000/month free ATM withdrawals in the EU and N.America',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Up to €2,000/month free ATM withdrawals in the EU and N.America',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '5yXcHeDNEXNqp8qyMMsh1Z', __typename: 'Sys' },
              name: 'Lounge access',
              longDescription: {
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
                            'Access 100+ airport lounges within the EU and select international destinations for free and receive exclusive offers from luxury airport retailers. Download the ',
                          nodeType: 'text',
                        },
                        {
                          data: {},
                          marks: [{ type: 'bold' }],
                          value: 'LoungeKey app',
                          nodeType: 'text',
                        },
                        {
                          data: {},
                          marks: [],
                          value: ' and register by providing your Coin card number.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
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
                            'Free airport lounge passes within the EU and select international destinations',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: 'SSPLiIkFgDhnlIxLmfIcP', __typename: 'Sys' },
              name: 'Virtual cards',
              longDescription: {
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
                            'Shop online with virtual card numbers generated on the fly and keep your actual card number to yourself. More privacy, more safety.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Disposable virtual cards for online shopping',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '7J3DNGSAIWlcxrOfC25KlX', __typename: 'Sys' },
              name: 'Travel insurance',
              longDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [{ type: 'bold' }],
                          value: 'Medical emergency coverage',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'heading-5',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'If you are injured or become sick during a trip requiring a medical service, you can be covered for eligible medical services and transportation home.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [{ type: 'bold' }],
                          value: 'Lost luggage reimbursement',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'heading-5',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Lost or damaged carry-on bags and checked-in luggage are covered up to €2,100 per passenger.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [{ type: 'bold' }],
                          value: 'Baggage delay insurance',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'heading-5',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'When the baggage is delayed over 5 hours, your essential purchases like toiletries and clothing are reimbursed. The maximum reimbursement amount is up to €80 per passenger per day, for up to 3 days.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: 'Medical, flight, and luggage delay insurance coverage',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
            {
              sys: { id: '4bqCgi4k0dGpQJmwO4prBa', __typename: 'Sys' },
              name: 'Cashbacks',
              longDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: '2% cashback on all purchases in the home country',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureLongDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureLongDescriptionLinks',
                },
                __typename: 'TopicProductFeatureLongDescription',
              },
              shortDescription: {
                json: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value: '2% cashback on all purchases in the home country',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                links: {
                  assets: {
                    block: [],
                    __typename: 'TopicProductFeatureShortDescriptionAssets',
                  },
                  __typename: 'TopicProductFeatureShortDescriptionLinks',
                },
                __typename: 'TopicProductFeatureShortDescription',
              },
              __typename: 'TopicProductFeature',
            },
          ],
          __typename: 'TopicProductFeaturesCollection',
        },
        __typename: 'TopicProduct',
      },
    ] as any,
    __typename: 'ComponentProductTableProductsCollection',
  },
};
