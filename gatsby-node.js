/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
//   return new Promise((resolve, reject) => {
//     const blogPostTemplate = path.resolve("src/views/templates/blog-post.js")
//     resolve(
//       graphql(`
//         query blogQuery {
//           allContentfulBlog {
//             edges {
//               node {
//                 id
//                 postDate
//                 postTitle
//                 slug
//               }
//             }
//           }
//         }
//       `).then(res => {
//         if (res.errors) {
//           reject(res.errors)
//         }
//         res.data.allContentfulBlog.edges.forEach(edge => {
//           createPage({
//             path: edge.node.slug,
//             component: blogPostTemplate,
//             context: {
//               slug: edge.node.slug,
//             },
//           })
//         })
//         return
//       })
//     )
//   })
// }
