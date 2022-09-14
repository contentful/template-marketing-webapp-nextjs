const exactPaths = ['/all', '/blog', '/sitemap'];
const nestedPaths = ['/post', '/category', '/legal'];

const pathToNextLinkHref = (path: string): string | null => {
  if (
    path.startsWith('http://') === true ||
    path.startsWith('https://') === true
  ) {
    return path;
  }

  if (path === '/') {
    return '/[lang]';
  }

  if (exactPaths.includes(path)) {
    return `/[lang]${path}`;
  }

  const nestedPathMatch = nestedPaths.find(
    (nestedPath) => path.startsWith(nestedPath) === true,
  );

  if (nestedPathMatch !== undefined) {
    return `/[lang]${nestedPathMatch}/[slug]`;
  }

  return `/[lang]/[slug]`;
};

export default pathToNextLinkHref;
