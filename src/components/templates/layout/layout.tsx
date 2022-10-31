import { CssBaseline, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import React, { useState, useEffect, ReactElement } from 'react';

import { Header } from '../header';

import { CtfFooterGql } from '@src/components/features/ctf-components/ctf-footer/ctf-footer-gql';
import { CtfMobileMenuGql } from '@src/components/features/ctf-components/ctf-mobile-menu/ctf-mobile-menu-gql';

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
  preview: boolean;
  children: ReactElement[];
}

export const Layout: React.FC<LayoutPropsInterface> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();
  const router = useRouter();

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
  }, [router.events]);

  return (
    <>
      <CssBaseline />
      {/* header */}
      <Header isMenuOpen={isMenuOpen} onMenuClick={() => setMenuOpen(true)} />

      {/* content */}
      <div className={classes.content}>{children}</div>

      {/* footer */}
      <CtfFooterGql />

      {/* mobile menu */}
      <CtfMobileMenuGql
        isOpen={isMenuOpen}
        onOpenChange={(newOpen: boolean) => {
          setMenuOpen(newOpen);
        }}
      />
    </>
  );
};
