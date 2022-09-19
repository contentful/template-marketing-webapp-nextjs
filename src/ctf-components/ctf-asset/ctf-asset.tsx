import React, { useContext } from 'react';

import { AssetFragment } from './__generated__/AssetFragment';

import CtfImage from '@ctf-components/ctf-image/ctf-image';
import CtfVideo from '@ctf-components/ctf-video/ctf-video';
import LayoutContext from '@src/layout-context';

interface CtfAssetPropsInterface extends AssetFragment {
  className?: string;
  figureClassName?: string;
  widthPx?: number;
  showDescription?: boolean;
  onClick?: () => any;
}

const CtfAsset = (props: CtfAssetPropsInterface) => {
  const { contentType, url, showDescription = true } = props;
  const layout = useContext(LayoutContext);

  if (contentType === null || url === null) {
    return null;
  }

  if (contentType.startsWith('image')) {
    return (
      <CtfImage
        {...props}
        showDescription={
          ['quote', 'product-table', 'info-block', 'duplex'].includes(
            layout.parent,
          ) === true
            ? false
            : showDescription
        }
        widthPx={
          ['quote', 'product-table', 'info-block', 'duplex'].includes(
            layout.parent,
          ) === true && props.width !== null
            ? Math.round(props.width / 2)
            : props.widthPx
        }
      />
    );
  }

  if (contentType.startsWith('video')) {
    return <CtfVideo {...props} />;
  }

  return null;
};

export default CtfAsset;
