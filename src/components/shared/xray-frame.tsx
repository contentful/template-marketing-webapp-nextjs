import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

import { useContentfulContext } from '@src/contentful-context';

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
  const contentfulContext = useContentfulContext();
  const {
    spaceIds: { main: spaceId },
  } = contentfulContext;
  const classes = useStyles();
  const contentfulUrl = `https://app.contentful.com/spaces/${spaceId}/entries/${props.sys.id}`; // TODO: replace me as well for https://contentful.atlassian.net/browse/PLATO-203
  return (
    <Box className={clsx(classes.xframeRoot, props.className)}>
      {props.children}
      <Box className={classes.frame}>
        <a href={contentfulUrl} target="_blank" rel="noopener noreferrer" className={classes.label}>
          <Typography>
            <strong>{props.__typename}</strong>
            {props.internalName && <span> | {props.internalName}</span>}
          </Typography>
        </a>
      </Box>
    </Box>
  );
};
