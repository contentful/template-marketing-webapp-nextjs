import { Theme, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { File } from 'react-kawaii';

import { PageContainer } from '@src/components/templates/page-container';
import colorfulTheme from '@src/theme';

interface PropsInterface {
  error?: {
    code: number;
    message?: string;
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    minhHeight: '100%',
    color: 'black',
  },
  container: {
    paddingTop: theme.spacing(16),
  },
  content: {
    '& > *': {
      marginBottom: theme.spacing(6),
    },
  },
  icon: {
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  headlineWrap: {
    alignItems: 'center',
    display: 'flex',
  },
}));

export const PageError = (props: PropsInterface) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const error =
    props.error === undefined
      ? {
          code: 400,
          message: t('error.somethingWentWrong'),
        }
      : props.error;

  return (
    <div className={classes.root}>
      <PageContainer>
        <Container className={classes.container}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8}>
              <div className={classes.headlineWrap}>
                <File
                  size={100}
                  mood="ko"
                  color={colorfulTheme.palette.primary.main}
                  className={classes.icon}
                />
                <Typography variant="h1" gutterBottom>
                  {t('error.code', { code: error.code })}
                </Typography>
              </div>
              {error.message && (
                <div className={classes.content}>
                  <Typography variant="h4">{error.message}</Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </div>
  );
};
