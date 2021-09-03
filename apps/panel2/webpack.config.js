const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
    /* mapped paths to share */
  '@kict/mfe-shared'
]);

module.exports = {
    output: {
        uniqueName: 'panel2',
        publicPath: 'auto',
    },
    optimization: {
        runtimeChunk: false,
        minimize: false,
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'panel2',
            filename: 'remoteEntry.js',
            exposes: {
                './Module': 'apps/panel2/src/app/remote-entry/entry.module.ts',
            },
            shared: {
                '@angular/core': { singleton: true, strictVersion: true },
                '@angular/common': { singleton: true, strictVersion: true },
                '@angular/common/http': {
                    singleton: true,
                    strictVersion: true,
                },
                '@angular/router': { singleton: true, strictVersion: true },
                '@kict/mfe-shared': { singleton: true, strictVersion: true },
                ...sharedMappings.getDescriptors(),
            },
        }),
        sharedMappings.getPlugin(),
    ],
};
