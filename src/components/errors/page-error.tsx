import { Theme, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { File } from 'react-kawaii';

import PageContainer from '@src/components/layout/page-container';
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

const CtfError404Gql = (props: PropsInterface) => {
  const classes = useStyles();

  const error =
    props.error === undefined
      ? {
          code: 400,
          message: 'Something went wrong, check your url and try again',
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
                  {error.code} error
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

export default CtfError404Gql;
