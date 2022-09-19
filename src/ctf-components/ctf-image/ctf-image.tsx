import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useMemo } from 'react';

import { AssetFragment } from '@ctf-components/ctf-asset/__generated__/AssetFragment';
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

interface CtfImagePropsInterface extends AssetFragment {
  widthPx?: number;
  cover?: boolean;
  ratio?: number;
  className?: string;
  imgClassName?: string;
  figureClassName?: string;
  showDescription?: boolean;
  onClick?: () => any;
}

const CtfImage = (props: CtfImagePropsInterface) => {
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
  } = props;

  const imgSrc = useMemo(() => {
    return widthPx === undefined ? url : `${url}?w=${Math.min(widthPx, width || CONTAINER_WIDTH)}`;
  }, [url, widthPx, width]);
  const imgSrcset = useMemo(() => {
    if (widthPx === undefined) {
      return '';
    }

    const computedWidth = Math.min(widthPx, width || CONTAINER_WIDTH);

    return `${url}?w=${computedWidth} ${computedWidth}w, ${url}?w=${computedWidth * 2} ${
      computedWidth * 2
    }w`;
  }, [url, widthPx, width]);
  const paddingTop = useMemo(
    () => `${(ratio || (height || 0) / (width || 0)) * 100}%`,
    [ratio, width, height],
  );
  const asBackground = ratio !== undefined || cover === true;
  const classes = useStyles();

  if (url === null) {
    return null;
  }

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
          <img
            className={clsx(classes.image, imgClassName)}
            src={imgSrc || undefined}
            srcSet={imgSrcset}
            alt={title!}
            width={widthPx ? widthPx : undefined}
          />
          {showDescription && description && <figcaption>{description}</figcaption>}
        </figure>
      )}
    </ButtonBase>
  );
};

export default CtfImage;
