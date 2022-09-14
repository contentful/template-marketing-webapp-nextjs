import { Container, Box } from '@material-ui/core';
import React from 'react';
import PageContainer from '@src/components/layout/page-container';
import GraphqlError from './graphql-error';

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
