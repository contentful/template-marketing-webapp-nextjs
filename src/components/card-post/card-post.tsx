import { makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

import CtfAsset from '@ctf-components/ctf-asset/ctf-asset';
import { PostFragmentBase } from '@ctf-components/ctf-post/__generated__/PostFragmentBase';
import Link from '@src/components/link/link';

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
  const classes = useStyles();

  const postNameBlock = () => {
    if (postName === null || postName === '') {
      return null;
    }

    if (linkToPost === false) {
      return (
        <Typography variant="body1" component="h3" className={classes.title}>
          {postName}
        </Typography>
      );
    }

    return (
      <Link href={`/post/${slug}`}>
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

    if (linkToPost === false) {
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
      <Link href={`/post/${slug}`}>
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
