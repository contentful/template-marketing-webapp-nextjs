import { CSSProperties } from '@mui/material/styles/createTypography';
import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

const ProductContainer = (props: Props) => {
  return (
    <div style={props.style} className={clsx(props.className)}>
      {props.children}
    </div>
  );
};

export default ProductContainer;
