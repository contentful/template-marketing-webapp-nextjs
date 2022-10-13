import { Container, Typography, Theme, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GetServerSideProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { ContentfulImage } from '@src/components/contentful-image/contentful-image';
import PageContainer from '@src/components/layout/page-container';
import Link from '@src/components/link/link';
import { useContentfulContext } from '@src/contentful-context';
import { generateGetServerSideProps } from '@src/lib/with-providers';
import contentfulConfig from 'contentful.config';

const logoRatio = contentfulConfig.icon.height / contentfulConfig.icon.width;

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    backgroundColor: '#EAEAEA',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '60.6rem',
    paddingBottom: theme.spacing(12),
    paddingTop: theme.spacing(8),
    '@media (max-height: 720px)': {
      paddingTop: theme.spacing(4),
    },
  },
  logo: {
    display: 'block',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-height: 720px)': {
      maxWidth: `${Math.round(logoRatio * 40)}px`,
    },
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: '9px',
    boxShadow: '0 3px 6px #00000029',
    marginTop: theme.spacing(8),
    padding: theme.spacing(11, 14, 8),
    '@media (max-height: 720px)': {
      marginTop: theme.spacing(4),
    },
  },
  formFields: {
    marginTop: theme.spacing(5),
  },
  formField: {
    '& + &': {
      marginTop: theme.spacing(5),
    },
  },
  formFieldLabel: {
    color: '#797979',
    display: 'flex',
    fontSize: '1.8rem',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  input: {
    appearance: 'none',
    backgroundColor: '#fff',
    border: '1px solid #797979',
    borderRadius: '9px',
    boxShadow: 'none',
    fontSize: '2.1rem',
    height: '5.4rem',
    padding: theme.spacing(2, 3),
    width: '100%',
  },
  forgotPassword: {
    color: '#797979',
  },
  signIn: {
    width: '100%',
  },
  signUpText: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
  signUp: {
    color: '#000',
  },
}));

const SignInPage: NextPage = () => {
  const { t } = useTranslation();

  const { locale } = useContentfulContext();
  const classes = useStyles();

  return (
    <>
      <Head>
        <title key="title">Sign In</title>
        <meta key="og:title" property="og:title" content="Sign In" />
        <meta key="description" name="description" content={contentfulConfig.meta.description} />
        <meta
          key="og:description"
          property="og:description"
          content={contentfulConfig.meta.description}
        />
        <meta key="og:url" property="og:url" content={`${contentfulConfig.meta.url}/sign-in`} />
        <meta key="og:locale" property="og:locale" content={locale.replace('-', '_')} />
      </Head>
      <PageContainer className={classes.page}>
        <Container maxWidth={false}>
          <section className={classes.container}>
            <header className={classes.header}>
              <ContentfulImage
                src={contentfulConfig.icon.dark}
                alt="Logo"
                width={`${contentfulConfig.icon.width}px`}
                height={`${contentfulConfig.icon.height}px`}
              />
            </header>
            <form className={classes.form}>
              <Typography variant="h3" component="h1">
                {t('common.signInAccount')}
              </Typography>
              <div className={classes.formFields}>
                <div className={classes.formField}>
                  <div className={classes.formFieldLabel}>
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label htmlFor="sign-in-email">E-Mail</label>
                  </div>
                  <input id="sign-in-email" name="email" type="email" className={classes.input} />
                </div>
                <div className={classes.formField}>
                  <div className={classes.formFieldLabel}>
                    <label htmlFor="sign-in-password">{t('common.password')}</label>
                    <a href="/src/pages/sign-in#" className={classes.forgotPassword}>
                      {t('common.forgotPassword')}
                    </a>
                  </div>
                  <input
                    id="sign-in-password"
                    name="password"
                    type="password"
                    className={classes.input}
                  />
                </div>
                <div className={classes.formField}>
                  <Button variant="contained" color="primary" className={classes.signIn}>
                    {t('common.signIn')}
                  </Button>
                  <Typography className={classes.signUpText}>
                    {t('common.noAccount')}
                    <Link
                      href="/sign-up"
                      variant="text"
                      color="primary"
                      underline
                      className={classes.signUp}
                    >
                      {t('common.signUp')}
                    </Link>
                  </Typography>
                </div>
              </div>
            </form>
          </section>
        </Container>
      </PageContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = generateGetServerSideProps({
  Page: SignInPage,
});

export default SignInPage;
