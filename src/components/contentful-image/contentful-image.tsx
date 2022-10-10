import Image, { ImageProps, ImageLoaderProps } from 'next/image';
import { useState } from 'react';

export const ContentfulImage = ({ src, alt, ...rest }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const myLoader = ({ src, quality, width }: ImageLoaderProps) => {
    const url = new URL(src);

    if (width && !url.searchParams.get('w') && !url.searchParams.get('h'))
      url.searchParams.set('w', width.toString());

    if (quality) url.searchParams.set('q', quality.toString());

    return url.toString();
  };

  return (
    <Image
      loader={myLoader}
      onLoad={() => {
        setLoaded(true);
      }}
      src={src}
      alt={alt}
      {...rest}
    />
  );
};
