import { ContentfulLivePreview } from '@contentful/live-preview';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset';
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { useContentfulContext } from '@src/contentful-context';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '93.4rem',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  rootIncreasedSpacing: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
  },
  avatar: {
    borderRadius: '50%',
    flexShrink: 0,
    marginBottom: theme.spacing(5),
    marginRight: theme.spacing(10),
    maxWidth: '9.8rem',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  name: {
    fontSize: '2.1rem',
    fontWeight: 500,
    lineHeight: 1.333,
    marginBottom: theme.spacing(1),
  },
  role: {
    fontSize: '1.8rem',
  },
  bio: {
    color: '#6E6E6E',
    marginTop: theme.spacing(5),
    '& p': {
      fontSize: '1.8rem',
      lineHeight: 1.333,
    },
    '& .MuiContainer-root:last-child p:last-child': {
      marginBottom: 0,
    },
  },
}));

interface CardLeadershipPropsInterface extends PersonFieldsFragment {
  previousComponent: string | null;
}

export const CardLeadership = (props: CardLeadershipPropsInterface) => {
  const { locale } = useContentfulContext();
  const {
    name,
    bio,
    avatar,
    previousComponent,
    sys: { id: entryId },
  } = props;
  const nameSplit = name?.split(', ');

  const classes = useStyles();

  return (
    <div
      className={clsx(
        classes.root,
        previousComponent === 'TopicPerson' ? classes.rootIncreasedSpacing : undefined,
      )}
    >
      {avatar && (
        <div
          {...ContentfulLivePreview.getProps({ entryId, fieldId: 'avatar', locale })}
          className={classes.avatar}
        >
          <CtfAsset {...avatar} showDescription={false} />
        </div>
      )}
      <div>
        <div {...ContentfulLivePreview.getProps({ entryId, fieldId: 'name', locale })}>
          {nameSplit && <Typography className={classes.name}>{nameSplit[0]}</Typography>}
          {nameSplit && nameSplit.length === 2 && (
            <Typography className={classes.role}>{nameSplit[1]}</Typography>
          )}
        </div>
        {bio && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'card-person' }}>
            <div {...ContentfulLivePreview.getProps({ entryId, fieldId: 'bio', locale })}>
              <CtfRichtext {...bio} className={classes.bio} />
            </div>
          </LayoutContext.Provider>
        )}
      </div>
    </div>
  );
};
