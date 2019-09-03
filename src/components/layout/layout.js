/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "./Nav"

/*
import Header from "./header"
<Header siteTitle={data.site.siteMetadata.title} />
*/


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

	return (
		<>
			<div className="front main-container">
                <div className="central-container">
                    <main>
                        {children}
                    </main>
                </div>
				<Nav />
			</div>
		</>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
