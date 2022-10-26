import React from 'react';

import { ErrorBox } from '@src/components/shared/error-box';

export const EntryNotFound = (props: { className?: string }) => (
  <ErrorBox {...props}>Component not found.</ErrorBox>
);
