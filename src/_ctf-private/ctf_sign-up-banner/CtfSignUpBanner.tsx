import { Theme, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import Logo from './CtfLogo.svg';

import { Link } from '@src/components/shared/link';

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
  ctflLink: {
    backgroundColor: '#FFDA00',
    borderRadius: '50px',
    padding: '8px 24px',
    transition: 'background .2s ease-in-out,opacity .2s ease-in-out,border-color 0.2s ease-in-out',
    '&:hover, &:focus': {
      backgroundColor: '#d3dce0',
      transform: 'none',
    },
  },
  ctflLinkText: {
    fontSize: '14px',
    color: '#000000',
    fontWeight: 600,
  },
}));

const signUpLink =
  'https://www.contentful.com/starter-templates/marketing-website/sign-up/?action=create_starter_template&template_name=marketing';

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
      <Link className={classes.ctflLink} href={signUpLink} target="_blank">
        <Typography className={clsx(classes.mobile, classes.ctflLinkText)}>Use template</Typography>
        <Typography className={clsx(classes.nonMobile, classes.ctflLinkText)}>
          Start with this template
        </Typography>
      </Link>
    </div>
  );
};
