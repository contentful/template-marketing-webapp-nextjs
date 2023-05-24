import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Block as RichtextBlock, BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Theme, Typography, Container } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { useMemo, useCallback } from 'react';

import { CtfAsset } from '../ctf-asset/ctf-asset';

import { AssetFieldsFragment } from '@src/components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated';
import { useCtfRichTextHyperlinkQuery } from '@src/components/features/ctf-components/ctf-richtext/__generated/ctf-richtext.generated';
import { PageLink } from '@src/components/features/page-link';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { useContentfulContext } from '@src/contentful-context';
import { useLayoutContext } from '@src/layout-context';
import { OmitRecursive, tryget } from '@src/utils';

const useStyles = makeStyles((theme: Theme) => ({
  paragrahGridListItem: {},

  root: {
    '& > ol, > ul': {
      listStylePosition: 'inside',
      marginBottom: theme.spacing(6),
      paddingLeft: 0,

      '& p': {
        marginBottom: theme.spacing(2),
        paddingLeft: theme.spacing(11),
      },

      '& $paragrahGridListItem': {
        display: 'block',
        '& $paragraphGridContainer': {
          marginBottom: 'inherit',
        },
        '& p': {
          display: 'list-item',
          padding: 0,
          margin: '0 0 0 2rem',
        },
      },
    },
    '& > ol': {
      listStyleType: 'none',

      '& $paragrahGridListItem': {
        '& p': {
          listStyle: 'decimal outside',
        },
      },
    },
    '& > ul': {
      listStyleType: 'none',

      '& $paragrahGridListItem': {
        '& p': {
          listStyle: 'disc outside',
        },
      },
    },
    '& table': {
      borderSpacing: 0,
      width: '100%',
      tableLayout: 'auto',
      textAlign: 'left',
      marginTop: '1rem',
      marginBottom: '1rem',
      '& th': {
        fontWeight: '600',
        borderBottom: '1px solid #ddd',
        verticalAlign: 'bottom',
        paddingRight: '0.8rem',
        paddingBottom: '0.8rem',
        paddingLeft: '0.8rem',
        borderRight: '1px solid #ddd',
      },
      '& tr': {
        borderBottomWidth: '1px',
      },
      '& tr:last-child': {
        borderBottomWidth: '0',
      },
      '& td': {
        verticalAlign: 'top',
        paddingTop: '0.8rem',
        paddingRight: '0.8rem',
        paddingBottom: '0.8rem',
        paddingLeft: '0.8rem',
        borderRight: '1px solid #ddd',
      },
      '& th:first-child': {
        paddingLeft: '0',
      },
      '& th:last-child': {
        paddingRight: '0',
        borderRight: 0,
      },
      '& td:first-child': {
        paddingLeft: '0',
      },
      '& td:last-child': {
        paddingRight: '0',
        borderRight: 0,
      },

      '& .MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
      },
      '& $paragraphGridContainer p:last-child': {
        marginBottom: 0,
      },
    },
  },

  embeddedEntry: {
    lineHeight: 0,
  },

  paragraphGridContainer: {
    '& p': {
      marginBottom: theme.spacing(6),
      fontSize: '1.8rem',
      color: '#414D63',
    },
    '& h1, h2, h3, h4, h5, h6': {
      marginBottom: theme.spacing(7),
      marginTop: theme.spacing(10),
    },
    '& blockquote': {
      borderLeft: '1px solid #000',
      fontStyle: 'italic',
      paddingLeft: theme.spacing(11),
    },
    '& code': {
      backgroundColor: '#F8F8F8',
      display: 'block',
      fontFamily: 'Courier, monospace',
      fontSize: '2rem',
      lineHeight: '1.25',
      overflow: 'auto',
      padding: theme.spacing(18, 10, 15, 10),
    },
    '& a': {
      color: 'inherit',
    },
    '& hr': {
      border: 0,
      borderTop: '1px solid #797979',
      boxShadow: 'none',
      marginBottom: theme.spacing(7),
      marginLeft: 0,
      marginTop: theme.spacing(10),
      width: '50%',
    },
    '& strong, b': {
      fontWeight: 600,
    },
  },
}));

interface Block extends RichtextBlock {
  __typename: string;
  sys: { id: string };
}

type Asset = OmitRecursive<AssetFieldsFragment, '__typename'>;

interface CtfRichtextPropsInterface {
  json: any;
  links?: {
    entries?: {
      block?: any;
      inline?: any;
    } | null;
    assets?: {
      block?: any;
    } | null;
  } | null;
  className?: string;
  containerClassName?: string;
  gridClassName?: string;
}

const EntryHyperlink = ({ node }) => {
  const { previewActive, locale } = useContentfulContext();

  const { isLoading, data } = useCtfRichTextHyperlinkQuery({
    locale,
    id: node.data?.target.sys.id,
    preview: previewActive,
  });

  const page = useContentfulLiveUpdates(data?.page);

  if (!data || isLoading) return null;

  if (page) {
    return (
      <PageLink page={page} variant="contained" underline>
        {(node.content[0] as any).value}
      </PageLink>
    );
  }

  return null;
};

export const CtfRichtext = (props: CtfRichtextPropsInterface) => {
  const { json, links, containerClassName, gridClassName } = props;
  const layout = useLayoutContext();

  const entryBlocks = useMemo(
    () => tryget(() => links!.entries!.block!.filter(b => !!b), [] as Block[])!,
    [links],
  );

  const assetBlocks = useMemo(
    () => tryget(() => links!.assets!.block!.filter(b => !!b), [] as Asset[])!,
    [links],
  );

  const classes = useStyles();

  const ParagraphGridContainer = useCallback(
    (containerProps: { children?: any }) => {
      return (
        <Container
          maxWidth={false}
          disableGutters={[
            'quote',
            'product-table',
            'info-block',
            'duplex',
            'product-description',
            'card-person',
            'category',
            'cta-subline',
            'hero-banner-body',
            'post-intro',
          ].includes(layout.parent)}
        >
          <div className={containerClassName}>
            <div className={clsx(classes.paragraphGridContainer, gridClassName)}>
              {containerProps.children}
            </div>
          </div>
        </Container>
      );
    },
    [classes.paragraphGridContainer, containerClassName, gridClassName, layout.parent],
  );

  const options = useMemo(() => {
    const opts: Options = {};
    opts.renderNode = {
      [INLINES.EMBEDDED_ENTRY]: node => {
        const id = tryget(() => node.data.target.sys.id);
        if (id) {
          // NOTE: As the Ninetailed mergetag is the only inline entry used on the content model we don't have to setup the check through the links array.
          // If there will come additional inline entries this needs to be done.

          return (
            <ComponentResolver
              componentProps={{ sys: { id }, __typename: 'NtMergetag' }}
              className={classes.embeddedEntry}
              inline
            />
          );
        }
        return <>{`${node.nodeType} ${id}`}</>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const id = tryget(() => node.data.target.sys.id);
        if (id) {
          const entry = entryBlocks.find(block => block!.sys.id === id);

          if (entry) {
            return <ComponentResolver componentProps={entry} className={classes.embeddedEntry} />;
          }
        }
        return <>{`${node.nodeType} ${id}`}</>;
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const id = tryget(() => node.data.target.sys.id);
        if (id) {
          const asset = assetBlocks.find(block => block!.sys.id === id);

          return (
            <ParagraphGridContainer>
              <CtfAsset {...asset} />
            </ParagraphGridContainer>
          );
        }

        return <>{`${node.nodeType} ${id}`}</>;
      },
      'entry-hyperlink': node => {
        return <EntryHyperlink node={node} />;
      },
    };

    const hrRenderer = () => {
      return (
        <ParagraphGridContainer>
          <hr />
        </ParagraphGridContainer>
      );
    };

    interface ParagraphRendererInterface {
      variant?: Variant;
      className?: string;
      component?: React.ElementType;
    }

    const paragraphRenderer =
      (rendererProps: ParagraphRendererInterface = {}) =>
      (_node, children) => {
        const { variant, className, component } = rendererProps;

        if (!variant) {
          return <ParagraphGridContainer>{children}</ParagraphGridContainer>;
        }

        if (component) {
          return (
            <ParagraphGridContainer>
              <Typography variant={variant} className={className} component={component}>
                {children}
              </Typography>
            </ParagraphGridContainer>
          );
        }

        return (
          <ParagraphGridContainer>
            <Typography variant={variant} className={className}>
              {children}
            </Typography>
          </ParagraphGridContainer>
        );
      };

    opts.renderNode![BLOCKS.PARAGRAPH] = paragraphRenderer({
      variant: 'body1',
    });
    opts.renderNode![BLOCKS.HEADING_1] = paragraphRenderer({ variant: 'h1', component: 'h2' });
    opts.renderNode![BLOCKS.HEADING_2] = paragraphRenderer({ variant: 'h2', component: 'h2' });
    opts.renderNode![BLOCKS.HEADING_3] = paragraphRenderer({ variant: 'h3', component: 'h2' });
    opts.renderNode![BLOCKS.HEADING_4] = paragraphRenderer({ variant: 'h4', component: 'h2' });
    opts.renderNode![BLOCKS.HEADING_5] = paragraphRenderer({ variant: 'h5', component: 'h2' });
    opts.renderNode![BLOCKS.HEADING_6] = paragraphRenderer({ variant: 'h6', component: 'h2' });
    opts.renderNode![BLOCKS.QUOTE] = paragraphRenderer({
      component: 'blockquote',
      variant: 'body1',
    });
    opts.renderNode![BLOCKS.TABLE] = (_, children) => {
      return (
        <ParagraphGridContainer>
          <div
            style={{
              overflow: 'auto',
            }}
          >
            <table>{children}</table>
          </div>
        </ParagraphGridContainer>
      );
    };
    opts.renderNode![BLOCKS.HR] = hrRenderer;
    opts.renderNode![BLOCKS.LIST_ITEM] = (_, children) => (
      <li className={classes.paragrahGridListItem}>{children}</li>
    );

    opts.renderText = text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={textSegment} />, textSegment];
      }, [] as any[]);
    };

    return opts;
  }, [
    ParagraphGridContainer,
    assetBlocks,
    classes.embeddedEntry,
    classes.paragrahGridListItem,
    entryBlocks,
  ]);

  return (
    <div className={clsx(props.className, classes.root)}>
      {documentToReactComponents(json, options)}
    </div>
  );
};
