import { CssBaseline, Theme } from '@material-ui/core';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import imagesLoaded from 'imagesloaded';
import React, { useEffect, useRef } from 'react';

import colorfulTheme from '@src/theme';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    ...theme.typography.body1,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const isInIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

const WrapperChild = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.content}>{children}</div>;
};

const Wrapper = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInIframe() === false || wrapperRef.current === null) {
      return;
    }

    const wrapperEl = wrapperRef.current;

    const notifyParent = () => {
      window.parent.postMessage(
        JSON.stringify({
          design_system_app_preview_content_height: wrapperEl.scrollHeight,
        }),
        '*',
      );
    };

    window.addEventListener('resize', notifyParent);
    window.addEventListener('load', notifyParent);
    const imagesLoadedInstance = imagesLoaded(wrapperEl);

    imagesLoadedInstance.on('progress', notifyParent);

    notifyParent();

    // eslint-disable-next-line consistent-return
    return () => {
      imagesLoadedInstance.off('progress', notifyParent);
      window.removeEventListener('resize', notifyParent);
      window.removeEventListener('load', notifyParent);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <ThemeProvider theme={colorfulTheme}>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <CssBaseline />
        <WrapperChild>{children}</WrapperChild>
      </ThemeProvider>
    </div>
  );
};

export default Wrapper;
