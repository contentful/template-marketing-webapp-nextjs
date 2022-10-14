import { Container, Box } from '@mui/material';
import React from 'react';

import GraphqlError from './graphql-error';

import PageContainer from '@src/components/layout/page-container';

const PageGraphqlError = (props: { error: any }) => (
  <PageContainer>
    <Container>
      <Box my={12}>
        <GraphqlError error={props.error} />
      </Box>
    </Container>
  </PageContainer>
);

export default PageGraphqlError;
