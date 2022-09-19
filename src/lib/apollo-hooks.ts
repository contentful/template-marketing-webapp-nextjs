import { useEffect, useContext } from 'react';
import { DataValue } from 'react-apollo';

import { ContentfulContext } from '@src/contentful-context';

export const useDataForPreview = (data?: DataValue<any, any>) => {
  const { previewActive } = useContext(ContentfulContext);

  useEffect(() => {
    if (!previewActive || !data) {
      return undefined;
    }

    data.startPolling(2000);

    return () => data.stopPolling();
  }, [data, previewActive]);
};
