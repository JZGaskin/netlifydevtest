import React from "react"
import { Link, button } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_G8SqaSR2Myfql0knkuh23KeKk1RARUw9&scope=read_write">
      Stripe Connect
    </a>
  </Layout>
)

export default IndexPage
