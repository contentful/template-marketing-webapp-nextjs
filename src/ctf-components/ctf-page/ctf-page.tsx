import React from 'react';
import ComponentResolver from '@src/components/component-resolver';
import PageContainer from '@src/components/layout/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { PageFragment } from './__generated__/PageFragment';

export interface CtfPagePropsInterface extends PageFragment {}

const CtfPage = (props: CtfPagePropsInterface) => {
  const topSection =
    (props.topSectionCollection != null) &&
    props.topSectionCollection.items.filter((it) => !(it == null));
  const content = props.pageContent;
  const extraSection =
    (props.extraSectionCollection != null) &&
    props.extraSectionCollection.items.filter((it) => !(it == null));

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <PageContainer>
      {(topSection != null) &&
        topSection.map((entry) => (
          <LayoutContext.Provider value={layoutConfig} key={entry.sys.id}>
            <ComponentResolver componentProps={entry} />
          </LayoutContext.Provider>
        ))}

      {(content != null) && (
        <LayoutContext.Provider value={defaultLayout} key={content.sys.id}>
          <ComponentResolver componentProps={content} />
        </LayoutContext.Provider>
      )}

      {(extraSection != null) &&
        extraSection.map((entry) => (
          <LayoutContext.Provider value={layoutConfig} key={entry.sys.id}>
            <ComponentResolver componentProps={entry} />
          </LayoutContext.Provider>
        ))}
    </PageContainer>
  );
};

export default CtfPage;
