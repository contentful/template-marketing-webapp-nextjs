import { Theme, makeStyles, Typography, Container } from '@material-ui/core';

import CardPostExtended from '@src/components/card-post-extended/card-post-extended';
import TagContainer from '@src/components/layout/category-container';
import Link from '@src/components/link/link';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { ContentfulTag, PostBaseFieldsFragment } from '@src/lib/__generated/graphql.types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(18),
    paddingTop: theme.spacing(18),
  },
  titleContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      flexFlow: 'row',
    },
  },
  title: {
    marginBottom: theme.spacing(6),
    transition: 'all 0.2s ease-in-out',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
      marginRight: theme.spacing(6),
    },
    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '126.2rem',
  },
  containerNarrow: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '77rem',
  },
  introText: {
    marginBottom: '8rem',
    '& p': {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.571,
    },
  },
  postWrap: {
    '& + &': {
      marginTop: theme.spacing(20),
    },
  },
}));

interface CtfTagPropsInterface {
  tag?: ContentfulTag;
  posts?: (PostBaseFieldsFragment | null)[];
}

export const CtfTag = (props: CtfTagPropsInterface) => {
  const { posts, tag } = props;
  const filteredPosts = posts?.flatMap(post => (post ? [post] : []));
  const classes = useStyles();

  return (
    <LayoutContext.Provider value={{ ...defaultLayout, parent: 'category' }}>
      <TagContainer>
        <Container maxWidth={false}>
          <div className={classes.root}>
            <div>
              <div className={classes.containerNarrow}>
                <div className={classes.titleContainer}>
                  <Link href="/blog" withoutMaterial className={classes.title}>
                    <Typography variant="h1">
                      {!tag ? 'Blog' : `Tagged with: ${tag.name}`}
                    </Typography>
                  </Link>
                </div>
              </div>
            </div>

            {filteredPosts && filteredPosts.length > 0 && (
              <div className={classes.containerNarrow}>
                {filteredPosts.map(post => (
                  <div key={post.sys.id} className={classes.postWrap}>
                    <CardPostExtended {...post} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </TagContainer>
    </LayoutContext.Provider>
  );
};
