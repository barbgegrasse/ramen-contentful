import React, {Component} from "react"
import { Link  } from 'gatsby'
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link";

import AniLink from "gatsby-plugin-transition-link/AniLink";
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
                <div className="container-fixed" >
                    <div id="hamburger" onClick={this.open_nav} className="hamburger d-inline-block d-lg-none">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                    <nav id="main-nav" className="main-nav" role="navigation">

                        <AniLink fade to="/">
                            <Logo />
                        </AniLink>
                        <ul class="list">
                            <li class="list-item">
                                <AniLink getProps={isActive} {...this.props} fade to="/">
                                    Accueil
                                </AniLink>
                            </li>
                            <li class="list-item">
                                <AniLink getProps={isPartiallyActive} {...this.props}    to="/recettes">
                                   Recettes
                                </AniLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default LeftNav;