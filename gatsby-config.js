require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `MGH Cancer Genetics Decision Aid`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-offline`, 
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-drupal-graphql`,
      options: {
        drupal: {
          url: `http://apiv2.mghda.dr809.test`,
          auth: {
            username: process.env.DRUPAL_AUTH_USERNAME,
            password: process.env.DRUPAL_AUTH_PASSWORD
          }
        }
      }
        // DEV
        //baseUrl: process.env.DRUPAL_API_URL,
        // STAGE
        //baseUrl: `http://api.mghda.hccstaging.org`,
        // PROD
        //baseUrl: `https://api.mghcancergeneticsda.com`,
    }
  ]
};
