import React, { useContext, useRef, useEffect } from 'react';
import { makeStyles, Theme, Container } from '@material-ui/core';
import LayoutContext from '@src/layout-context';
import clsx from 'clsx';
import transformers from './services';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(7),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(10),
  },
  containerNoMargins: {
    marginBottom: 0,
    marginTop: 0,
  },
  content: {
    position: 'relative',
    paddingTop: '56.25%',
    '& iframe': {
      height: '100%',
      left: 0,
      top: 0,
      position: 'absolute',
      width: '100%',
    },
  },
}));

interface CtfExternalAssetUrlPropsInterface {
  externalUrl: string;
}

const CtfExternalAssetUrl = (props: CtfExternalAssetUrlPropsInterface) => {
  const { externalUrl } = props;
  const layout = useContext(LayoutContext);
  const externalUrlWrapperEl = useRef<HTMLDivElement>(null);
  const transformer = transformers.find(
    (potentialTransformer) =>
      potentialTransformer.shouldTransform(externalUrl) === true,
  );

  useEffect(() => {
    if (externalUrlWrapperEl.current === null) {
      return;
    }

    if (transformer === undefined || transformer.effect === undefined) {
      return;
    }

    transformer.effect(externalUrlWrapperEl, externalUrl);
  }, [externalUrl, externalUrlWrapperEl]);

  const classes = useStyles();

  if (transformer === undefined) {
    return (
      <p>
        Url &quot;{externalUrl}&quot; could not be embedded, service not
        supported
      </p>
    );
  }

  return (
    <Container>
      <div
        className={clsx(
          classes.container,
          transformer.id === 'typeform' ? classes.containerNoMargins : null,
        )}
        style={{ maxWidth: layout.containerWidth }}
      >
        <div
          className={classes.content}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: transformer.getHTML(externalUrl) }}
          ref={externalUrlWrapperEl}
        />
      </div>
    </Container>
  );
};

export default CtfExternalAssetUrl;
