import React, {Component} from "react"

//import TransitionLink from "gatsby-plugin-transition-link"
//import { TransitionState } from "gatsby-plugin-transition-link";

//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby"
import Logo from '../images/Logo'


class LeftNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    open_nav(){
        const mainnav = document.querySelector(".main-nav");
        const listItem = document.querySelectorAll(".list-item");

        //Gestion du burger menu
        mainnav.classList.toggle("open");

        listItem.forEach(item => {
            item.classList.toggle("fadeIn");
        });
    }

    close_nav(e){
        //console.log("sert à rien");
    }

    render(){
    /*
    {data.allContentfulCategorie.edges.map(categorie => (
        <Link getProps={isPartiallyActive} {...this.props}  to={`recettes/${categorie.node.slug}`}>
            {categorie.node.titre}
        </Link>
    ))}
    */
        const isActive = ({ isCurrent }) => {
            return isCurrent ? { className: "active" } : null
        }

        const isPartiallyActive = ({
            isPartiallyCurrent
        }) => {
            return isPartiallyCurrent ? { className: "active" } : null
        }

        const { data } = this.props
        return (
            <aside className="sidebar-left">
                <div className="container-fixed" >
                    <div id="hamburger" onClick={this.open_nav} className="hamburger d-inline-block d-lg-none">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <nav id="main-nav" className="main-nav" role="navigation">

                        <Link fade to="/">
                            <Logo />
                        </Link>
                        <ul className="list">
                            <li className="list-item">
                                <Link getProps={isActive} {...this.props} fade to="/">
                                    Accueil
                                </Link>
                            </li>
                            <li className="list-item">
                                <Link getProps={isPartiallyActive} {...this.props} to="/recettes">
                                   Recettes
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default LeftNav;


export const pageQuery = graphql`
    query LeftNavCategories {
        allContentfulCategorie {
            nodes {
                id
                titre
                slug
            }
        }
    }
`