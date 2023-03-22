const path = require('path');

const warnAboutOverridingPackage = function (overridePath) {
  if (warnAboutOverridingPackage.done) return;
  console.warn(
    '\x1b[33m%s\x1b[0m',
    `\n[package-overrides] You are overriding the @contentful/live-preview package with ${overridePath}. To stop this remove LOCAL_LIVE_PREVIEW_PACKAGE_OVERRIDE from your .env file\n`,
  );
  warnAboutOverridingPackage.done = true;
};

module.exports = function overridePaths(config) {
  if (process.env.LOCAL_LIVE_PREVIEW_PACKAGE_OVERRIDE) {
    const overridePath = path.resolve(process.env.LOCAL_LIVE_PREVIEW_PACKAGE_OVERRIDE);
    warnAboutOverridingPackage(overridePath);
    config.resolve.alias['@contentful/live-preview'] = [overridePath];
  }
};
