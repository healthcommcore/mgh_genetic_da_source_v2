/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allNodeDecisionAidPage {
        edges {
          node {
            id
            langcode
            drupal_internal__nid
            path {
              alias
            }
          }
        }
      }
      allNodeArticle {
        edges {
          node {
            id
            langcode
            drupal_internal__nid
            path {
              alias
            }
          }
        }
      }
    }
  `).then( (result) => {
    result.data.allNodeDecisionAidPage.edges.forEach( ({ node }) => {
      createPage({
        path: node.path.alias,
        component: path.resolve(`./src/templates/decision-page-template.js`),
        context: {
          id: node.id,
          lang: node.langcode,
          drupal_id: node.drupal_internal__nid,
        },
      });
    })
  })
}

