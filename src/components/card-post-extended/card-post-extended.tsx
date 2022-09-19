import { makeStyles, Theme, Typography } from '@material-ui/core';
import formatDate from 'date-fns/format';
import React, { useContext, useMemo } from 'react';

import CtfAsset from '@ctf-components/ctf-asset/ctf-asset';
import CtfRichtext from '@ctf-components/ctf-richtext/ctf-richtext';
import Avatar from '@src/components/avatar/avatar';
import Link from '@src/components/link/link';
import { ContentfulContext } from '@src/contentful-context';
import { PostFragmentBase } from '@src/ctf-components/ctf-post/__generated__/PostFragmentBase';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getLocaleConfig } from '@src/locales-map';

interface CtfCardPostExtendedPropsInterface extends PostFragmentBase {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px solid #797979',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover, &:focus-within': {
      boxShadow: '0 3px 6px #00000029',
    },
  },
  image: {},
  postBody: {
    padding: theme.spacing(6),
  },
  title: {
    fontWeight: 600,
    lineHeight: 1.476,
    marginBottom: theme.spacing(3),
  },
  text: {
    color: '#797979',
  },
  meta: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1.8rem',
    marginTop: theme.spacing(3),
  },
  author: {
    alignItems: 'center',
    display: 'flex',
  },
  authorAvatar: {
    marginRight: theme.spacing(3),
    width: '3.4rem',
  },
  authorName: {
    flexShrink: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  metaDate: {
    color: '#797979',
  },
}));

const CtfCardPostExtended = (props: CtfCardPostExtendedPropsInterface) => {
  const { postName, featuredImage, slug, introText, author, publishedDate } = props;
  const { locale } = useContext(ContentfulContext);
  const { lang, locale: realLocale } = getLocaleConfig(locale);

  const classes = useStyles();

  const publishedDateFormated = useMemo(() => {
    if (publishedDate === null) {
      return null;
    }

    return (
      <span className={classes.metaDate}>
        {author && <>{realLocale === 'de-DE' ? ', am ' : ', on '}</>}
        {formatDate(new Date(publishedDate), 'MMM dd, yyyy')}
      </span>
    );
  }, [author, classes.metaDate, publishedDate, realLocale]);

  return (
    <article className={classes.root}>
      <Link href="/[lang]/post/[slug]" as={`/${lang}/post/${slug}`}>
        {featuredImage && (
          <CtfAsset
            {...featuredImage}
            showDescription={false}
            widthPx={770}
            className={classes.image}
          />
        )}
        <div className={classes.postBody}>
          <Typography variant="body1" component="h2" className={classes.title}>
            {postName}
          </Typography>
          {introText && (
            <LayoutContext.Provider value={{ ...defaultLayout, parent: 'post-intro' }}>
              <CtfRichtext {...introText} containerClassName={classes.text} />
            </LayoutContext.Provider>
          )}
          {author && (
            <div className={classes.meta}>
              <div className={classes.author}>
                {author.avatar && (
                  <div className={classes.authorAvatar}>
                    <Avatar asset={author.avatar} widthPx={34} />
                  </div>
                )}
                <p className={classes.authorName}>{author.name}</p>
              </div>
              {publishedDateFormated}
            </div>
          )}
          {!author && <div className={classes.meta}>{publishedDateFormated}</div>}
        </div>
      </Link>
    </article>
  );
};

export default CtfCardPostExtended;
