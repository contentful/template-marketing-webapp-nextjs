import CtfBusinessInfo from '@ctf-components/ctf-business-info/ctf-business-info';
import { LegalPageFieldsFragment } from '@ctf-components/ctf-legal-page/__generated/ctf-legal-page.generated';
import PageContainer from '@src/components/layout/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';

export const CtfLegalPage = (props: LegalPageFieldsFragment) => {
  const { pageContent } = props;

  return (
    <PageContainer>
      {pageContent && pageContent.__typename === 'TopicBusinessInfo' ? (
        <LayoutContext.Provider value={defaultLayout} key={pageContent.sys.id}>
          <CtfBusinessInfo
            body={pageContent.body}
            name={pageContent.name}
            featuredImage={pageContent.featuredImage}
          />
        </LayoutContext.Provider>
      ) : null}
    </PageContainer>
  );
};
