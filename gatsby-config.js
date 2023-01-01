require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  // lesson:
  // this flag runs ssr upon whole page reload in develop mode for spotting build bugs without having to go through the whole build process
  flags: {
    DEV_SSR: true
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`
  ],
};
