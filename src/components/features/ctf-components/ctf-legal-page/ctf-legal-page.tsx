import { LegalPageFieldsFragment } from './__generated/ctf-legal-page.generated';

import CtfBusinessInfo from '@src/components/features/ctf-components/ctf-business-info/ctf-business-info';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

export const CtfLegalPage = (props: LegalPageFieldsFragment) => {
  const { pageContent } = props;

  if (pageContent?.__typename !== 'TopicBusinessInfo') return null;

  return (
    <PageContainer>
      <LayoutContext.Provider value={defaultLayout} key={pageContent.sys.id}>
        <CtfBusinessInfo
          body={pageContent.body}
          name={pageContent.name}
          featuredImage={pageContent.featuredImage}
        />
      </LayoutContext.Provider>
    </PageContainer>
  );
};
