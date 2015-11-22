Package.describe({
  name: 'ag2s:sax',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'A sax-style parser for XML and HTML',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/galler-alexander/meteor-sax',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'sax': '1.1.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('sax.js', 'server');
  api.export('sax', 'server')
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ag2s:sax');
  api.addFiles('sax-tests.js', 'server');
});
