import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { useContext } from 'react';

import { ContentfulContext } from '@src/contentful-context';

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

const XrayFrame = (props: Props) => {
  const contentfulContext = useContext(ContentfulContext);
  const {
    spaceEnv,
    spaceIds: { main: spaceId },
  } = contentfulContext;
  const classes = useStyles();
  const environmentsUrlFragment = spaceEnv === 'default' ? '' : `environments/${spaceEnv}/`;
  const contentfulUrl = `https://app.contentful.com/spaces/${spaceId}/${environmentsUrlFragment}entries/${props.sys.id}`;
  console.log(contentfulUrl);
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

export default XrayFrame;
