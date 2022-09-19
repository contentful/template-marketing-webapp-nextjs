import React from 'react';

import { PageFragment } from './__generated__/PageFragment';

import ComponentResolver from '@src/components/component-resolver';
import PageContainer from '@src/components/layout/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

export interface CtfPagePropsInterface extends PageFragment {}

const CtfPage = (props: CtfPagePropsInterface) => {
  const topSection =
    props.topSectionCollection &&
    props.topSectionCollection.items.filter((it) => !!it);
  const content = props.pageContent;
  const extraSection =
    props.extraSectionCollection &&
    props.extraSectionCollection.items.filter((it) => !!it);

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <PageContainer>
      {topSection &&
        topSection.map((entry) => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry!} />
          </LayoutContext.Provider>
        ))}

      {content && (
        <LayoutContext.Provider value={defaultLayout} key={content.sys.id}>
          <ComponentResolver componentProps={content} />
        </LayoutContext.Provider>
      )}

      {extraSection &&
        extraSection.map((entry) => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry!} />
          </LayoutContext.Provider>
        ))}
    </PageContainer>
  );
};

export default CtfPage;
