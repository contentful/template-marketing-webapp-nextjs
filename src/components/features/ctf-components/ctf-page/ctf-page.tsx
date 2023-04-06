import React from 'react';

import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

const CtfPage = (props: CtfPageFieldsFragment) => {
  const topSection =
    props.topSectionCollection && props.topSectionCollection.items.filter(it => !!it);

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <PageContainer>
      {topSection &&
        topSection.map(entry => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry!} />
          </LayoutContext.Provider>
        ))}
    </PageContainer>
  );
};

export default CtfPage;
