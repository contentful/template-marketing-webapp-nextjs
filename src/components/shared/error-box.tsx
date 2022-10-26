import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

interface Props {
  className?: string;
  children?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  errorBoxRoot: {
    color: theme.palette.error.dark,
    border: `1px solid ${theme.palette.error.dark}`,
    padding: theme.spacing(1),
    margin: theme.spacing(12, 0),
  },
}));

export const ErrorBox = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.errorBoxRoot, props.className)}>
      <Typography variant="body1">{props.children}</Typography>
    </div>
  );
};
