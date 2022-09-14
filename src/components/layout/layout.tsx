import React, { useState, useCallback, useEffect, ReactElement } from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import { CssBaseline, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getLocaleConfig } from '@src/locales-map';
import MobileMenu from './mobile-menu';
import Header from './header';
import Footer from './footer';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    ...theme.typography.body1,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface LayoutPropsInterface {
  locale: string;
  preview: boolean;
  children: ReactElement[];
}

const Layout: React.FC<LayoutPropsInterface> = (props) => {
  const { locale, children } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();
  const router = useRouter();

  const onLocaleChange = useCallback(
    (l?: string) => {
      if (!l) {
        return;
      }

      const { lang } = getLocaleConfig(l);
      const segments = router.asPath.split('/').filter((a) => !!a);

      segments.shift();
      segments.unshift(lang);

      const query = {
        ...router.query,
      };

      delete query.lang;
      delete query.slug;

      router.push(
        `${router.pathname}?${queryString.stringify(query)}`,
        queryString.stringify(query)
          ? `/${segments.join('/').split('?')[0]}?${queryString.stringify(
              query,
            )}`
          : `/${segments.join('/').split('?')[0]}`,
      );
    },
    [router.asPath, router.query],
  );

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setMenuOpen(false);
    });

    router.events.on('routeChangeComplete', () => {
      if (document.activeElement === null) {
        return;
      }

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header onMenuClick={() => setMenuOpen(true)} locale={locale} />

      {/* content */}
      <div className={classes.content}>{children}</div>

      <Footer locale={locale} onLocaleChange={onLocaleChange} />

      <MobileMenu
        isOpen={isMenuOpen}
        onOpenChange={(newOpen: boolean) => {
          setMenuOpen(newOpen);
        }}
        locale={locale}
      />
    </>
  );
};

export default Layout;
