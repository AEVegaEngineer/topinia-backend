const { composePlugins, withNx } = require('@nx/webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = composePlugins(withNx(), (config) => {
  config.context = __dirname;

  config.externals = [
    nodeExternals({
      allowlist: [/^@nestjs/],
    }),
  ];

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      tslib: path.resolve(__dirname, 'node_modules/tslib'),
    },
  };

  config.module.rules.push({
    test: /\.js$/,
    loader: 'string-replace-loader',
    options: {
      search: 'require\\([\'"]([^\'"]+)[\'"]\\)',
      replace: (match, p1) => {
        if (p1.startsWith('.')) return match;
        return `require('${p1}')`;
      },
      flags: 'g',
    },
  });

  return config;
});
