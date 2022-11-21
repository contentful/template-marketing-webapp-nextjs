module.exports = function includePolyfills(config) {
  const originalEntry = config.entry;

  config.entry = async () => {
    const entries = await originalEntry();

    if (entries['main.js'] && !entries['main.js'].includes('./src/polyfills.ts')) {
      entries['main.js'].unshift('./src/polyfills.ts');
    }

    return entries;
  };
};
