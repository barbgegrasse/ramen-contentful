import React, {Component} from "react"
import { Link  } from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from '../images/Logo'


class Nav extends Component {

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
        console.log("sert à rien");
    }

    render(){
        const isActive = ({ isCurrent }) => {
            return isCurrent ? { className: "active" } : null
        }

        const isPartiallyActive = ({
            isPartiallyCurrent
        }) => {
            return isPartiallyCurrent ? { className: "active" } : null
        }
        return (
            <aside className="sidebar-left">
                <div class="container-fixed" >
                    <div id="hamburger" onClick={this.open_nav} className="hamburger d-inline-block d-lg-none">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <nav id="main-nav" className="main-nav" role="navigation">
                        <div className="brand-logo">
                            <AniLink paintDrip to="/" hex="#ee4749" duration={1}>
                                <Logo />
                            </AniLink>
                        </div>
                        <ul className="list">
                            <li className="list-item">
                                <AniLink getProps={isActive} {...this.props}  paintDrip to="/" hex="#ee4749" duration={1}>
                                    Accueil
                                </AniLink>
                            </li>
                            <li className="list-item">
                                <AniLink getProps={isPartiallyActive} {...this.props}  paintDrip to="/recettes" hex="#ee4749" duration={1}>
                                Recettes</AniLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default Nav;