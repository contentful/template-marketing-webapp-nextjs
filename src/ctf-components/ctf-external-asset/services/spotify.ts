export const id = 'spotify';

const includesSomeOfArray = (string: string, array: string[]): boolean =>
  array.some((item) => string.includes(item));

export const shouldTransform = (url: string): boolean => {
  const { host, pathname } = new URL(url);

  return (
    host === 'open.spotify.com' &&
    !includesSomeOfArray(pathname, ['embed', 'embed-podcast']) &&
    includesSomeOfArray(pathname, [
      '/album/',
      '/artist/',
      '/episode/',
      '/show/',
      '/track/',
      '/playlist/',
    ])
  );
};

export const getSpotifyIFrameSrc = (urlString: string): string => {
  const { pathname } = new URL(urlString);
  const type = pathname.split('/')[1].toLowerCase();

  const podcastTypes = ['episode', 'show'];
  if (podcastTypes.includes(type)) {
    return urlString.replace(type, `embed-podcast/${type}`);
  }

  return urlString.replace(type, `embed/${type}`);
};

export const getHTML = (url: string): string => {
  const iframeSrc = getSpotifyIFrameSrc(url);

  return `<iframe src="${iframeSrc}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
};
