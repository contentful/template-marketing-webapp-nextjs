import { Theme, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import Logo from './CtfLogo.svg';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    background: '#0033A3',
    height: '54px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
  },
  mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  nonMobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  text: {
    fontSize: '14px',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFDA00',
    borderRadius: '50px',

    padding: '8px 24px',
    transition: 'background .2s ease-in-out,opacity .2s ease-in-out,border-color 0.2s ease-in-out',
    '&:hover, &:focus': {
      backgroundColor: '#d3dce0',
      transform: 'none',
    },
  },
  buttonText: {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 600,
  },
}));

export const CtfSignUpBanner = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Logo />
      <Typography className={clsx(classes.mobile, classes.text)}>Content from</Typography>
      <Typography className={clsx(classes.nonMobile, classes.text)}>
        The content on this template is managed via Contentful
      </Typography>
      <Button className={classes.button}>
        <Typography className={clsx(classes.mobile, classes.buttonText)}>Use template</Typography>
        <Typography className={clsx(classes.nonMobile, classes.buttonText)}>
          {' '}
          Start with this template
        </Typography>
      </Button>
    </div>
  );
};
