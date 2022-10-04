import { useContext } from 'react';

import { CtfImage } from '@ctf-components/ctf-image/ctf-image';
import { CtfVideo } from '@ctf-components/ctf-video/ctf-video';
import LayoutContext from '@src/layout-context';
import { AssetFieldsFragment } from '@src/lib/__generated/graphql.types';

interface CtfAssetPropsInterface extends AssetFieldsFragment {
  className?: string;
  figureClassName?: string;
  widthPx?: number;
  showDescription?: boolean;
  onClick?: () => any;
}

export const CtfAsset = (props: CtfAssetPropsInterface) => {
  const { contentType, url, showDescription = true } = props;
  const layout = useContext(LayoutContext);

  if (!contentType || !url) {
    return null;
  }

  if (contentType.startsWith('image')) {
    return (
      <CtfImage
        {...props}
        showDescription={
          ['quote', 'product-table', 'info-block', 'duplex'].includes(layout.parent) === true
            ? false
            : showDescription
        }
        widthPx={
          ['quote', 'product-table', 'info-block', 'duplex'].includes(layout.parent) === true &&
          props.width
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
