import { ImageProps } from 'next/image';
import { useContext } from 'react';

import { AssetFieldsFragment } from '@ctf-components/ctf-asset/__generated/ctf-asset.generated';
import { CtfImage } from '@ctf-components/ctf-image/ctf-image';
import { CtfVideo } from '@ctf-components/ctf-video/ctf-video';
import LayoutContext from '@src/layout-context';

interface CtfAssetPropsInterface
  extends AssetFieldsFragment,
    Pick<ImageProps, 'layout' | 'objectFit' | 'objectPosition'> {
  className?: string;
  showDescription?: boolean;
  onClick?: () => any;
}

export const CtfAsset = (props: CtfAssetPropsInterface) => {
  const { contentType, url, showDescription = true, title, width, height } = props;
  const layout = useContext(LayoutContext);

  if (!contentType || !url) {
    return null;
  }

  if (contentType.startsWith('image')) {
    return (
      <CtfImage
        {...props}
        height={height || undefined}
        width={width || undefined}
        title={title || ''}
        src={url}
        showDescription={
          ['quote', 'product-table', 'info-block', 'duplex'].includes(layout.parent) === true
            ? false
            : showDescription
        }
      />
    );
  }

  if (contentType.startsWith('video')) {
    return <CtfVideo {...props} />;
  }

  return null;
};
