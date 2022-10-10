import { makeStyles, Theme, Container } from '@material-ui/core';

import { FeaturedCardsFieldsFragment } from './__generated/ctf-featured-cards.generated';

import CardPost from '@src/components/card-post/card-post';
import SectionHeadlines from '@src/components/section-headlines/section-headlines';

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

export const CtfFeaturedCards = ({
  headline,
  featuredPostsCollection,
}: FeaturedCardsFieldsFragment) => {
  const classes = useStyles();
  if (!featuredPostsCollection) return;
  const filteredFeaturedPostsCollection = featuredPostsCollection.items.flatMap(featurePost =>
    featurePost ? [featurePost] : [],
  );

  return (
    <Container maxWidth={false} className={classes.section}>
      <div className={classes.innerContainer}>
        <SectionHeadlines
          headline={headline}
          headlineProps={{ variant: 'h2' }}
          className={classes.sectionHeadlines}
          align="left"
        />
        {filteredFeaturedPostsCollection.length > 0 && (
          <div className={classes.blocksGrid}>
            {filteredFeaturedPostsCollection.map(featuredPost => (
              <div key={featuredPost.sys.id} className={classes.block}>
                <CardPost {...featuredPost} linkToPost />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};
