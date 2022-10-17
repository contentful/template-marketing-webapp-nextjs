export const getLinkDisplayText = menuItem => {
  if ('pageName' in menuItem) {
    return menuItem.pageName;
  }
  if ('categoryName' in menuItem) {
    return menuItem.categoryName;
  }
  if ('postName' in menuItem) {
    return menuItem.postName;
  }
  return menuItem.slug;
};

export const getLinkHrefPrefix = menuItem => {
  if ('pageName' in menuItem) {
    return `/${menuItem.slug}`;
  }

  if ('categoryName' in menuItem) {
    return `/category/${menuItem.slug}`;
  }

  if ('postName' in menuItem) {
    return `/post/${menuItem.slug}`;
  }

  return `/${menuItem.slug}`;
};
