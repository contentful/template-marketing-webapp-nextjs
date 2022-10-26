import { Container, Box } from '@mui/material';

import { GraphqlError } from '@src/components/shared/graphql-error';
import { PageContainer } from '@src/components/templates/page-container';

export const PageGraphqlError = (props: { error: any }) => (
  <PageContainer>
    <Container>
      <Box my={12}>
        <GraphqlError error={props.error} />
      </Box>
    </Container>
  </PageContainer>
);
