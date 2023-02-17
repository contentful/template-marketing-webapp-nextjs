import {
  ConsentDrawerAction,
  injectOsanoGlobalStyles,
} from '@contentful/experience-consent-manager';
import { Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { injectGlobal } from 'emotion';
import { useTranslation } from 'next-i18next';

import { useCtfConsent } from './useCtfConsent';

injectOsanoGlobalStyles();

injectGlobal({
  '.osano-cm-window': {
    zIndex: 'auto',
  },
  '.osano-cm-window p, .osano-cm-window span, .osano-cm-window button': {
    fontSize: '1.4rem!important',
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: theme.spacing(4),
    textDecoration: 'underline',
    color: '#fff',
    fontSize: 'inherit',
  },
}));

export const CtfConsentManager = () => {
  const { t } = useTranslation();

  const { data: consentManager } = useCtfConsent();

  const classes = useStyles();

  return consentManager ? (
    <ConsentDrawerAction
      consentManager={consentManager}
      renderAction={({ openDrawer, disabled }) => (
        <Button variant="text" className={classes.button} onClick={openDrawer} disabled={disabled}>
          {t('legal.manageConsent')}
        </Button>
      )}
    />
  ) : null;
};
