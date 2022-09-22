import { useEffect } from 'react';
import { DataValue } from 'react-apollo';

import { useContentfulContext } from '@src/contentful-context';

export const useDataForPreview = (data?: DataValue<any, any>) => {
  const { previewActive } = useContentfulContext();

  useEffect(() => {
    if (!previewActive || !data) {
      return undefined;
    }

    data.startPolling(2000);

    return () => data.stopPolling();
  }, [data, previewActive]);
};
