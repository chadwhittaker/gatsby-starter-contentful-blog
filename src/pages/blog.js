import React from 'react'
import { Link, graphql } from 'gatsby'

import blogStyles from './styles/blog.module.scss'
import Layout from '../components/Layout'
import Head from '../components/Head'

const BlogPage = ({ data }) => {
  const blogs = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blogs</h1>
      <div className={blogStyles.posts}>
        {blogs.map(({ node }) => (
          <div key={node.title} className={blogStyles.post}>
            <Link to={`/blog/${node.slug}`}>
              <h4>{node.title}</h4>
              <p>{node.publishedDate}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default BlogPage
