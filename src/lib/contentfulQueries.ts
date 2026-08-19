import { CtfBusinessInfoDocument } from '@src/components/features/ctf-components/ctf-business-info/__generated/business-info.generated';
import { CtfCtaDocument } from '@src/components/features/ctf-components/ctf-cta/__generated/ctf-cta.generated';
import { CtfDuplexDocument } from '@src/components/features/ctf-components/ctf-duplex/__generated/ctf-duplex.generated';
import { CtfFooterDocument } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated';
import { CtfHeroBannerDocument } from '@src/components/features/ctf-components/ctf-hero-banner/__generated/ctf-hero-banner.generated';
import { CtfInfoBlockDocument } from '@src/components/features/ctf-components/ctf-info-block/__generated/ctf-info-block.generated';
import { CtfNavigationDocument } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated';
import { CtfPageDocument } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { CtfPersonDocument } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated';
import { CtfProductDocument } from '@src/components/features/ctf-components/ctf-product/__generated/ctf-product.generated';
import { CtfProductFeatureDocument } from '@src/components/features/ctf-components/ctf-product-feature/__generated/ctf-product-feature.generated';
import { CtfProductTableDocument } from '@src/components/features/ctf-components/ctf-product-table/__generated/ctf-product-table.generated';
import { CtfQuoteDocument } from '@src/components/features/ctf-components/ctf-quote/__generated/ctf-quote.generated';
import { CtfRichTextHyperlinkDocument } from '@src/components/features/ctf-components/ctf-richtext/__generated/ctf-richtext.generated';
import { CtfTextBlockDocument } from '@src/components/features/ctf-components/ctf-text-block/__generated/ctf-text-block.generated';

export function getContentfulQuery(operationName: string): string | undefined {
  switch (operationName) {
    case 'CtfBusinessInfo':
      return CtfBusinessInfoDocument;
    case 'CtfCta':
      return CtfCtaDocument;
    case 'CtfDuplex':
      return CtfDuplexDocument;
    case 'CtfFooter':
      return CtfFooterDocument;
    case 'CtfHeroBanner':
      return CtfHeroBannerDocument;
    case 'CtfInfoBlock':
      return CtfInfoBlockDocument;
    case 'CtfNavigation':
      return CtfNavigationDocument;
    case 'CtfPage':
      return CtfPageDocument;
    case 'CtfPerson':
      return CtfPersonDocument;
    case 'CtfProduct':
      return CtfProductDocument;
    case 'CtfProductFeature':
      return CtfProductFeatureDocument;
    case 'CtfProductTable':
      return CtfProductTableDocument;
    case 'CtfQuote':
      return CtfQuoteDocument;
    case 'CtfRichTextHyperlink':
      return CtfRichTextHyperlinkDocument;
    case 'CtfTextBlock':
      return CtfTextBlockDocument;
    default:
      return undefined;
  }
}
