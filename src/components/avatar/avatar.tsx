import React, { useMemo } from 'react';
import { Avatar as MuiAvatar, Theme, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AssetFragment } from '@src/ctf-components/ctf-asset/__generated__/AssetFragment';
import { PropsFromFragment } from '@src/utils';

const useStyles = makeStyles((theme: Theme) => ({
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
  asset: PropsFromFragment<AssetFragment>;
  widthPx?: number;
}

const Avatar = (props: AvatarPropsInterface) => {
  const { asset, widthPx = 250 } = props;
  const url = useMemo(() => `${asset.url}?w=${widthPx}`, [asset]);
  const classes = useStyles();
  return (
    <div className={classes.avatarRoot}>
      <MuiAvatar className={classes.avatar} src={url} />
    </div>
  );
};

export default Avatar;
