import { Avatar as MuiAvatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useMemo } from 'react';

import { AssetFieldsFragment } from '@src/lib/__generated/graphql.types';

const useStyles = makeStyles(() => ({
  avatarRoot: {
    width: `100%`,
    height: 0,
    padding: `50%`,
    position: `relative`,
  },
  avatar: {
    width: '100%',
    height: '100%',
    position: `absolute`,
    top: 0,
    left: 0,
  },
}));

interface AvatarPropsInterface {
  asset: AssetFieldsFragment;
  widthPx?: number;
}

const Avatar = (props: AvatarPropsInterface) => {
  const { asset, widthPx = 250 } = props;
  const url = useMemo(() => `${asset.url}?w=${widthPx}`, [asset.url, widthPx]);
  const classes = useStyles();
  return (
    <div className={classes.avatarRoot}>
      <MuiAvatar className={classes.avatar} src={url} />
    </div>
  );
};

export default Avatar;
