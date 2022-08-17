const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');


module.exports = withModuleFederationPlugin({
  name: 'dashboardMfe',
  filename: 'remoteEntry.js',
  exposes: {
    './module': './/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
