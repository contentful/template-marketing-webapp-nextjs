import React from 'react'

import ErrorBox from './error-box'


const EntryNotFound = (props: { className?: string }) => (
  <ErrorBox {...props}>Component not found.</ErrorBox>
)

export default EntryNotFound
