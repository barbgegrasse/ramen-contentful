import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Menu from './Menu'
import { ContextProviderComponent }  from '../Context'
//import Transition from './Transition'


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { showIntro: true };
    }

    render(){
        //console.log(this.state)
        const {children} = this.props
        return(
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
                        <ContextProviderComponent>
                            <div className="front main-container">
                                <div className="central-container">
                                    <main>
                                        {/*<Transition location={location} >
                                            {children}
                                        </Transition>*/}
                                        {children}
                                    </main>
                                </div>
                            </div>
                            <Menu />
                        </ContextProviderComponent>
                    </>
                )}
            />
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

/*
const Layout = ({ children, location }) => (

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
            //                            <Transition location={location} >
            //                   {children}
            //              </Transition>
            
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
                <nav className="nav">
                    <a href="#" className="nav__link">Home</a>
                    <a href="#" className="nav__link">About</a>
                    <a href="#" className="nav__link">Shop</a>
                    <a href="#" className="nav__link">Contact</a>
                </nav>

                <div className="hamburger">
                    <span className="hamburger__patty"></span>
                    <span className="hamburger__patty"></span>
                    <span className="hamburger__patty"></span>
                </div>
            </>
        )}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
*/





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