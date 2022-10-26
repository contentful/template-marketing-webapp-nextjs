import { CSSProperties } from '@mui/material/styles/createTypography';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const CategoryContainer = (props: Props) => {
  const classes = useStyles();
  return (
    <div style={props.style} className={clsx(classes.root, props.className)}>
      {props.children}
    </div>
  );
};

export default CategoryContainer;
