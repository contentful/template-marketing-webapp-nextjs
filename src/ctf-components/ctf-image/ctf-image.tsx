import { ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import React, { useMemo } from 'react';

import { CONTAINER_WIDTH } from '@src/theme';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },

  figure: {
    margin: 0,
  },

  image: {
    display: 'block',
    maxWidth: '100%',
  },

  backgroundImg: {
    display: 'inline-block',
    height: 0,
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
}));

interface CtfImagePropsInterface {
  widthPx?: number;
  title: any;
  description?: string;
  url: string;
  width: number;
  height: number;
  cover?: boolean;
  ratio?: number;
  className?: string;
  imgClassName?: string;
  figureClassName?: string;
  showDescription?: boolean;
  layout?: ImageProps['layout'];
  onClick?: () => any;
}

export const CtfImage = (props: CtfImagePropsInterface) => {
  const {
    title,
    description,
    url,
    width,
    height,
    widthPx,
    cover,
    ratio,
    className,
    imgClassName,
    figureClassName,
    onClick,
    showDescription = true,
    layout = "intrinsic",
  } = props;

  const imgSrc = useMemo(() => {
    return widthPx === undefined ? url : `${url}?w=${Math.min(widthPx, width || CONTAINER_WIDTH)}`;
  }, [url, widthPx, width]);

  const paddingTop = useMemo(
    () => `${(ratio || (height || 0) / (width || 0)) * 100}%`,
    [ratio, width, height],
  );
  const asBackground = ratio !== undefined || cover === true;
  const classes = useStyles();

  if (!url) return null;

  return (
    <ButtonBase className={clsx(classes.root, className)} onClick={onClick}>
      {asBackground ? (
        <div>
          <div
            className={clsx(classes.backgroundImg, imgClassName)}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: cover ? 'cover' : 'contain',
              paddingTop,
            }}
          />
        </div>
      ) : (
        <figure className={clsx(classes.figure, figureClassName)}>
          <Image
            className={clsx(classes.image, imgClassName)}
            src={url}
            alt={title!}
            width={width!}
            height={height!}
            layout={layout}
          />
          {showDescription && description && <figcaption>{description}</figcaption>}
        </figure>
      )}
    </ButtonBase>
  );
};
