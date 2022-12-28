// Please be aware that with more recent versions of Gatsby (particularly v3) you may have to set the env variable CI=true for the suggested solutions to work.

// I believe this is because of changes to the development experience where pages & queries are processed on-demand instead of upfront.

// The following flags FAST_DEV / QUERY_ON_DEMAND may be responsible for this behaviour.

// for react-pdf
const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins }) => {
  // if (stage === "build-html" || stage === "develop-html") {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /react-pdf/, // check /pdfjs-dist/ too
  //           use: loaders.null()
  //         },
  //         {
  //           test: /pdfjs-dist/, // check /pdfjs-dist/ too
  //           use: loaders.null()
  //         },
  //         // what they added "to the loader" to make work
  //         // https://stackoverflow.com/questions/72237158/gatsby-react-pdf
  //         // what is webpack? https://masteringjs.io/tutorials/webpack/config
  //         {
  //           test: /safer-buffer/,
  //           use: loaders.null()
  //         }
  //       ]
  //     }
  //   })
  // }
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        module: "empty",
        dgram: "empty",
        dns: "mock",
        fs: "empty",
        http2: "empty",
        net: "empty",
        tls: "empty",
        child_process: "empty",
        process: require.resolve("process/browser"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util"),
        buffer: require.resolve("buffer"),
        asset: require.resolve("assert")
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser"
      })
    ]
  })
}

// ***************** Gatsby Auth **********************************
// What this does: defines that any route that starts with /app/
// is part of your restricted content and the page will be created on demand:
//
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};