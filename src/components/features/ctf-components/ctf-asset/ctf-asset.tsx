import { ImageProps } from 'next/image';

import { AssetFieldsFragment } from './__generated/ctf-asset.generated';

import { CtfImage } from '@src/components/features/ctf-components/ctf-image/ctf-image';
import { CtfVideo } from '@src/components/features/ctf-components/ctf-video/ctf-video';
import { useLayoutContext } from '@src/layout-context';

interface CtfAssetPropsInterface
  extends AssetFieldsFragment,
    Pick<ImageProps, 'layout' | 'objectFit' | 'objectPosition'> {
  className?: string;
  showDescription?: boolean;
  onClick?: () => any;
}

export const CtfAsset = (props: CtfAssetPropsInterface) => {
  const { contentType, url, showDescription = true, title, width, height } = props;
  const layout = useLayoutContext();

  if (!contentType || !url) {
    return null;
  }

  if (contentType.startsWith('image')) {
    return (
      <CtfImage
        height={height || undefined}
        width={width || undefined}
        alt={title || ''}
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
