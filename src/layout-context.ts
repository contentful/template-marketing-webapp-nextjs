import React from 'react';

export const defaultLayout = {
  containerWidth: 770,
  parent: '',
};

const LayoutContext = React.createContext(defaultLayout);

export default LayoutContext;
