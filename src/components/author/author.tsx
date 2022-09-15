import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@src/components/avatar/avatar';
import { PersonFragment } from '@ctf-components/ctf-person/__generated__/PersonFragment';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  avatar: {
    display: 'inline-block',
    width: '11.4rem',
  },
  name: {
    fontSize: '2.5rem',
    lineHeight: 1.52,
    marginBottom: 0,
    marginTop: theme.spacing(3),
  },
}));

interface CtfAuthorPropsInterface extends PersonFragment {}

const CtfAuthor = (props: CtfAuthorPropsInterface) => {
  const { name, avatar } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {(avatar != null) && (
        <div className={classes.avatar}>
          <Avatar asset={avatar} />
        </div>
      )}
      {name && <p className={classes.name}>{name}</p>}
    </div>
  );
};

export default CtfAuthor;
