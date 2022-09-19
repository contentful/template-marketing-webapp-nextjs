import { makeStyles, Theme, Container } from '@material-ui/core';
import { PersonalizedComponent } from '@ninetailed/experience.js-next';
import React, { useContext } from 'react';

import { FeaturedCardsFragment } from './__generated__/FeaturedCardsFragment';

import CardPost from '@src/components/card-post/card-post';
import PersonalizationFrame from '@src/components/personalization-frame';
import SectionHeadlines from '@src/components/section-headlines/section-headlines';
import { ContentfulContext } from '@src/contentful-context';
import { WrapIf } from '@src/jsx-utils';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    backgroundColor: '#f7f7f7',
  },
  innerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126rem',
    padding: theme.spacing(19, 0, 19),
  },
  sectionHeadlines: {
    marginBottom: theme.spacing(12),
  },
  blocksGrid: {
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: '-5rem',
    marginTop: '-5rem',
  },
  block: {
    marginLeft: '5rem',
    marginTop: '5rem',
    maxWidth: '39rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'calc((100% - 15rem) / 3)',
      '@supports not (width: calc((100% - 15rem) / 3))': {
        width: '29%',
      },
    },
  },
}));

export interface CtfFeaturedCardsPropsType extends FeaturedCardsFragment {}

const CtfFeaturedCards: PersonalizedComponent<CtfFeaturedCardsPropsType> = props => {
  const { headline, featuredPostsCollection, ninetailed, ntVariantsCollection } = props;
  const classes = useStyles();
  const { xrayActive } = useContext(ContentfulContext);

  const isPersonalized =
    ntVariantsCollection?.items !== undefined && ntVariantsCollection.items.length > 0;

  return (
    <WrapIf
      when={xrayActive === true && isPersonalized === true}
      wrap={children => (
        <PersonalizationFrame audienceId={ninetailed?.audience.id ?? null}>
          {children}
        </PersonalizationFrame>
      )}>
      <Container maxWidth={false} className={classes.section}>
        <div className={classes.innerContainer}>
          <SectionHeadlines
            headline={headline}
            headlineProps={{ variant: 'h2' }}
            className={classes.sectionHeadlines}
            align="left"
          />
          <div className={classes.blocksGrid}>
            {featuredPostsCollection &&
              featuredPostsCollection.items
                .filter(featuredPost => !!featuredPost)
                .map(featuredPost => (
                  <div key={featuredPost!.sys.id} className={classes.block}>
                    <CardPost {...featuredPost!} linkToPost />
                  </div>
                ))}
          </div>
        </div>
      </Container>
    </WrapIf>
  );
};

export default CtfFeaturedCards;
