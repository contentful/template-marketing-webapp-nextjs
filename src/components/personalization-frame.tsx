import { Box, makeStyles, Theme, Typography } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import clsx from 'clsx';
import gql from 'graphql-tag';
import React, { useMemo } from 'react';
import { useQuery } from 'react-apollo';

import { CtfPersonalizationFrameQuery } from './__generated__/CtfPersonalizationFrameQuery';

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
    pointerEvents: 'none',
    zIndex: 1,
  },

  label: {
    background: '#c5c5c5',
    display: 'inline-block',
    maxWidth: '100%',
    padding: theme.spacing(1, 2, 1, 2),
    pointerEvents: 'all',
    position: 'absolute',
    left: 0,
    textDecoration: 'none',
    top: '30px',
    '& p': {
      color: '#000',
      fontSize: '1.4rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  labelWithIcon: {
    alignItems: 'center',
    display: 'flex',
    '& > svg': {
      marginRight: '0.5rem',
    },
  },
}));

const personalizationFrameQuery = gql`
  query CtfPersonalizationFrameQuery($id: String!) {
    ntAudience(id: $id) {
      name: ntName
    }
  }
`;

interface Props {
  audienceId: string | null;
  children: any;
  className?: string;
}

const PersonalizationFrame = (props: Props) => {
  const contentfulContext = useContentfulContext();
  const {
    spaceEnv,
    spaceIds: { main: spaceId },
  } = contentfulContext;
  const classes = useStyles();
  const environmentsUrlFragment = spaceEnv === 'default' ? '' : `environments/${spaceEnv}/`;
  const contentfulUrl = `https://app.contentful.com/spaces/${spaceId}/${environmentsUrlFragment}entries/${props.audienceId}`;
  const queryResult = useQuery<CtfPersonalizationFrameQuery>(personalizationFrameQuery, {
    variables: {
      id: props.audienceId,
    },
    skip: props.audienceId === null,
  });

  const audienceName = useMemo(() => {
    if (queryResult.data === undefined) {
      return 'Loading';
    }

    return queryResult.data.ntAudience?.name ?? 'Unknown';
  }, [queryResult]);

  return (
    <Box className={clsx(classes.xframeRoot, props.className)}>
      {props.children}
      <Box className={classes.frame}>
        {props.audienceId === null ? (
          <div className={classes.label}>
            <Typography className={classes.labelWithIcon}>
              <Face fontSize="small" /> Audience: &quot;All visitors (default)&quot;
            </Typography>
          </div>
        ) : (
          <a
            href={contentfulUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.label}>
            <Typography className={classes.labelWithIcon}>
              <Face fontSize="small" /> Audience: &quot;{audienceName}&quot;
            </Typography>
          </a>
        )}
      </Box>
    </Box>
  );
};

export default PersonalizationFrame;
