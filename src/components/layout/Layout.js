import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import LeftNav from './LeftNav'
import Transition from './Transition'


const Layout = ({ children, location }) => (
    /*
        <LeftNav />
    */
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            /*
                                        <Transition location={location} >
                                {children}
                            </Transition>
            */
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Ramen Noob' },
                        { name: 'keywords', content: 'Ramen, Tare' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>

                <div className="front main-container">
                    <div className="central-container">
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
        
            </>
        )}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*
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
*/