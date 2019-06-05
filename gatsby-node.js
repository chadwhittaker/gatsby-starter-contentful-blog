// this is a Node JS file for accessing the Node API available in Gatsby
// go to the Docs to see more info on available API points
const path = require('path') // this is a core node module for our use

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. get path to blog template
  const blogTemplate = path.resolve('./src/templates/blog.js') // this must be an absolute path from root of harddrive, thats what resolve does

  // 2. get markdown data (we only need the slug)
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // 3. create new page for each blog
  res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      // data you want to pass down to blog
      context: {
        slug: node.slug,
      },
    })
  })
}
