const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
    (config) => {
        const fallback = config.resolve.fallback || {};

        Object.assign(fallback, {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            zlib: require.resolve("browserify-zlib"),
            url: require.resolve("url/"),
        });

        config.resolve.fallback = fallback;

        return config;
    }
);
