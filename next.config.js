/**
 * @type {import('next').NextConfig}
 */
const path = require("path");

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// ANALYZE=true yarn build
// module.exports = withBundleAnalyzer({})

module.exports = {
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  modularizeImports: {
    "@material-ui/core/": {
      transform: "@material-ui/core/{{member}}",
    },
    "@material-ui/lab/": {
      transform: "@material-ui/lab/{{member}}",
    },
    "@material-ui/icons/?(((\\w*)?/?)*)": {
      transform: "@material-ui/icons/{{ matches.[1] }}/{{member}}",
    },
  },
};
