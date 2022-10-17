import { Theme } from '@mui/material';
import { CSSProperties } from '@mui/material/styles/createTypography';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

import { HEADER_HEIGHT, HEADER_HEIGHT_MD } from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: HEADER_HEIGHT_MD,
    [theme.breakpoints.up('md')]: {
      marginTop: HEADER_HEIGHT,
    },
  },
}));

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const ProductContainer = (props: Props) => {
  const classes = useStyles();
  return (
    <div style={props.style} className={clsx(classes.root, props.className)}>
      {props.children}
    </div>
  );
};

export default ProductContainer;
