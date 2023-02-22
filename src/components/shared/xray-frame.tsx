import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

import { useContentfulContext } from '@src/contentful-context';
import typewriter from 'analytics';

const useStyles = makeStyles((theme: Theme) => ({
  xframeRoot: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 1,
  },
  frame: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    borderBottom: `1px dashed #EAEAEA`,
    borderTop: `1px dashed #EAEAEA`,
    pointerEvents: 'none',
    zIndex: 1,
  },

  label: {
    cursor: 'pointer',
    background: '#EAEAEA',
    display: 'inline-block',
    maxWidth: '100%',
    padding: theme.spacing(1, 2, 1, 2),
    pointerEvents: 'all',
    position: 'absolute',
    left: 0,
    textDecoration: 'none',
    top: 0,
    '& p': {
      color: '#000',
      fontSize: '1.4rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
}));

interface Props {
  __typename: string;
  sys: { id: string };
  internalName?: string;
  children: any;
  className?: string;
}

export const XrayFrame = (props: Props) => {
  const router = useRouter();
  const contentfulContext = useContentfulContext();
  const { domain = 'contentful.com' } = router.query;

  const {
    spaceIds: { main: spaceId },
  } = contentfulContext;
  const classes = useStyles();
  const contentfulUrl = `https://app.${domain}/spaces/${spaceId}/entries/${props.sys.id}`;

  const handleOnClick = e => {
    e.stopPropagation();

    typewriter.contentModelInteracted({
      entryTypeName: props.__typename || '',
      entryInternalName: props.internalName || '',
      entryLink: contentfulUrl,
    });

    window.open(contentfulUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <Box className={clsx(classes.xframeRoot, props.className)}>
      {props.children}
      <Box className={classes.frame}>
        <button onClick={handleOnClick} className={classes.label}>
          <Typography>
            <strong>{props.__typename}</strong>
            {props.internalName && <span> | {props.internalName}</span>}
          </Typography>
        </button>
      </Box>
    </Box>
  );
};
