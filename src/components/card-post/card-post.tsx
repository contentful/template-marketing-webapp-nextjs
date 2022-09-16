import React, { useContext } from 'react';
import { makeStyles, Theme, Typography } from '@material-ui/core';
import CtfAsset from '@ctf-components/ctf-asset/ctf-asset';
import { ContentfulContext } from '@pages/_app';
import Link from '@src/components/link/link';
import { getLocaleConfig } from '@src/locales-map';
import { PostFragmentBase } from '@ctf-components/ctf-post/__generated__/PostFragmentBase';

interface CtfCardPostPropsInterface extends PostFragmentBase {
  linkToPost?: boolean;
  extended?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    marginBottom: theme.spacing(5),
  },
  title: {
    fontWeight: 600,
    lineHeight: 1.476,
    marginBottom: theme.spacing(2),
  },
  author: {
    color: '#797979',
    fontSize: '1.8rem',
    lineHeight: 1.389,
    marginBottom: 0,
    marginTop: 0,
  },
}));

const CtfCardPost = (props: CtfCardPostPropsInterface) => {
  const { postName, featuredImage, slug, linkToPost = false, author } = props;
  const { locale } = useContext(ContentfulContext);
  const { lang } = getLocaleConfig(locale);
  const classes = useStyles();

  const postNameBlock = () => {
    if (postName === null || postName === '') {
      return null;
    }

    if (!linkToPost) {
      return (
        <Typography variant="body1" component="h3" className={classes.title}>
          {postName}
        </Typography>
      );
    }

    return (
      <Link href="/[lang]/post/[slug]" as={`/${lang}/post/${slug}`}>
        <Typography variant="body1" component="h3" className={classes.title}>
          {postName}
        </Typography>
      </Link>
    );
  };

  const featuredImageBlock = () => {
    if (featuredImage === null) {
      return null;
    }

    if (!linkToPost) {
      return (
        <CtfAsset
          {...featuredImage}
          showDescription={false}
          widthPx={800}
          className={classes.image}
        />
      );
    }

    return (
      <Link href="/[lang]/post/[slug]" as={`/${lang}/post/${slug}`}>
        <CtfAsset
          {...featuredImage}
          showDescription={false}
          widthPx={800}
          className={classes.image}
        />
      </Link>
    );
  };

  return (
    <article>
      {featuredImageBlock()}
      {postNameBlock()}
      {author && <p className={classes.author}>by {author.name}</p>}
    </article>
  );
};

export default CtfCardPost;
