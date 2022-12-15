import { Box } from '@mui/material';
import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

interface CtfImagePropsInterface extends ImageProps {
  description?: string | null;
  showDescription?: boolean;
}

export const CtfImage = ({
  src,
  description,
  showDescription = true,
  width,
  height,
  layout,
  ...rest
}: CtfImagePropsInterface) => {
  const [loaded, setLoaded] = useState(false);

  if (!src) return null;

  const blurUrl = new URL(String(src));
  blurUrl.searchParams.set('w', '100');

  return (
    <Box
      component="figure"
      margin="0"
      fontSize={0}
      style={{
        transition: '300ms ease-out',
        transitionProperty: 'opacity',
        opacity: loaded ? 1 : 0,
      }}>
      <Image
        onLoad={() => {
          setLoaded(true);
        }}
        src={src}
        width={width}
        height={height}
        layout={layout}
        placeholder="blur"
        blurDataURL={blurUrl.toString()}
        {...rest}
      />
      {showDescription && description && <figcaption>{description}</figcaption>}
    </Box>
  );
};
