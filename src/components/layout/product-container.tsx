import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: HEADER_HEIGHT_MD,
    [theme.breakpoints.up('md')]: {
      marginTop: HEADER_HEIGHT,
    },
  },
}));

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
}

const ProductContainer = (props: Props) => {
  const classes = useStyles();
  return (
    <div style={props.style} className={clsx(classes.root, props.className)}>
      {props.children}
    </div>
  );
};

export default ProductContainer;
