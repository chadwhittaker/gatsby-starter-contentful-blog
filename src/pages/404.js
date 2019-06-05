import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Oh no, you're lost</h1>
      <p>
        <Link to="/">Go home!</Link>
      </p>
    </Layout>
  )
}

export default NotFound
