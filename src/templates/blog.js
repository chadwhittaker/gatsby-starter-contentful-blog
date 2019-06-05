import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import Head from '../components/Head'

const Blog = ({ data }) => {
  const blog = data.contentfulBlogPost

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={blog.title} />
      <h2>{blog.title}</h2>
      <p>Published: {blog.publishedDate}</p>
      <hr />
      {documentToReactComponents(blog.body.json, options)}
    </Layout>
  )
}

// slug variable will come from the 'context' we setup in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

export default Blog
