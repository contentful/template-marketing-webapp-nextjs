import React from 'react';

export const defaultLayout = {
  containerWidth: 770,
  parent: '',
};

const LayoutContext = React.createContext(defaultLayout);

export const useLayoutContext = () => React.useContext(LayoutContext);

export default LayoutContext;
