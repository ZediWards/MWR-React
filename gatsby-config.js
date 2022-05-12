require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.lolaedgar.com",
    title: "Lola-Edgar",
  },
  plugins: [
    `gatsby-plugin-styled-components`
  ],
};
