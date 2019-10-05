import React, {Component} from "react"

//import TransitionLink from "gatsby-plugin-transition-link"
//import { TransitionState } from "gatsby-plugin-transition-link";

//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby"
import { TweenMax, TimelineMax, Back, Power1, SlowMo } from "gsap";
import AniLink from "gatsby-plugin-transition-link/AniLink"


class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: false,
        };
    }

    HandleClickItemMenu(){
        const tl = new TimelineMax()
        tl.to('#main-nav',0.5,{opacity:0} ) //Opacité du menu à 0
        //Je change mon bouton de menu
        tl.to('#patty2',0,{opacity:1} ) //On réaffiche la barre 2 qui se superpose avec barre 3
        
        tl.addLabel('one') //Rotate des barres
        tl.to('#patty2',0.5,{rotation:-45, transformOrigin:"center center",delay:0.5, ease: Power1.easeOut},'one') 
        tl.to('#patty3',0.5,{rotation: 45, transformOrigin:"center center",delay:0.5, ease: Power1.easeOut},'one') 

        tl.addLabel('two')
        TweenMax.to('#patty1',0.2,{width: 0, transformOrigin:"top left", ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'two') //Ensuite on anime la largeur
        TweenMax.to('#patty4',0.2,{width: 0, transformOrigin:"top left", ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'two') 
    }


    HandleClickBurger(){
        const hamburger = document.querySelector("#hamburger")
        const mainNav = document.querySelector("#main-nav")
        const nav = document.querySelector('.nav');
        const navItems = nav.querySelectorAll('.nav__link');

        hamburger.classList.toggle("active")
        mainNav.classList.toggle("active")

        if(hamburger.classList.contains("active")){
            const tl = new TimelineMax()
            tl.addLabel('one')
            TweenMax.to('#patty2',0,{opacity:1} ) //On réaffiche la barre 2 qui se superpose avec barre 3
            TweenMax.to('#patty2',0.5,{rotation:-45, transformOrigin:"center center",delay:0.5, ease: Power1.easeOut},'one') //Rotate des barres
            TweenMax.to('#patty3',0.5,{rotation: 45, transformOrigin:"center center",delay:0.5, ease: Power1.easeOut},'one') 
            tl.addLabel('two')
            TweenMax.to('#patty1',0.2,{width: 0, transformOrigin:"top left", ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'two') //Ensuite on anime la largeur
            TweenMax.to('#patty4',0.2,{width: 0, transformOrigin:"top left", ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'two') 

            tl.addLabel('menu')
            TweenMax.to('#main-nav',0.2,{opacity: 1, ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'menu') //Enfin on masque le menu
            
            for (var i = 0, ii = navItems.length; i < ii; i++) {
                navItems[i].classList.toggle('active');
            }
        }else{
            //On ferme le menue
            const tl = new TimelineMax()
            for (var i = 0, ii = navItems.length; i < ii; i++) {
                navItems[i].classList.toggle('active');
            }
            setTimeout(function() {
                TweenMax.to('#patty2',0,{opacity:1} ) //On réaffiche la barre 2 qui se superpose avec barre 3
                tl.addLabel('one')
                tl.to('#patty2',0.5,{rotation:0, transformOrigin:"center center",ease: Power1.easeOut},'one')  //Rotate des barres
                tl.to('#patty3',0.5,{rotation:0, transformOrigin:"center center",ease: Power1.easeOut},'one')  
                tl.addLabel('two')
                tl.to('#patty1',0.2,{width: '30px',ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'two') //Ensuite on anime la largeur
                tl.to('#patty4',0.2,{width: '30px',ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'two') 
    
                tl.addLabel('menu')
                TweenMax.to('#main-nav',0.2,{opacity: 0, ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)},'menu') //Enfin on affiche le menu
            }, 700);
        }
    }

    HandleMouseEnterBurger(){
        const hamburger = document.querySelector("#hamburger")
        if(!hamburger.classList.contains("active")){
            const tl = new TimelineMax()
            tl.to('#patty1',0.2,{transform: 'translate(-50%, calc(-50% - 8px)) scale(0.75,1)',transformOrigin:"left top",ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)}) //On réduit la barre 1
            tl.to('#patty1',0.2,{transform: 'translate(-50%, calc(-50% - 8px)) scale(1,1)',transformOrigin:"left top", ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)}) //On augmente la barre 1
            
            tl.to('#patty2',0,{opacity:0} ) //On masque la barre 2 qui se superpose avec barre 3
            
            tl.to('#patty3',0.2,{transform: 'translate(-50%, -50%) scale(0.75,1)',transformOrigin:"left top",ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)}, "-=0.2" ) //On réduit la barre 2
            tl.to('#patty3',0.2,{transform: 'translate(-50%, -50%) scale(1,1)',transformOrigin:"left top",ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)}) //On réduit la barre 2

            tl.to('#patty4',0.2,{transform: 'translate(-50%, calc(-50% + 8px)) scale(0.75,1)',transformOrigin:"left top",ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)}, "-=0.2" ) //On réduit la barre 2
            tl.to('#patty4',0.2,{transform: 'translate(-50%, calc(-50% + 8px)) scale(1,1)',transformOrigin:"left top",ease:Back.easeIn, ease:SlowMo.ease.config(0.7, 0.2)}) //On réduit la barre 2
        }
    }

    render(){

        const isActive = ({ isCurrent }) => {
            return isCurrent ? { className: "nav__link current" } : null
        }

        const isPartiallyActive = ({
            isPartiallyCurrent
        }) => {
            return isPartiallyCurrent ? { className: "nav__link current" } : "Lorem issou"
        }
        /*
        const { data } = this.props
        */
        return (
            /*
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
            */
           <>
            <nav id="main-nav" className="block-nav">
                <div className="nav">
                    <Link onClick={this.HandleClickItemMenu} className="nav__link"  to="/">
                        <span className="nav__link__item">Home</span>
                    </Link>
                    <AniLink onClick={this.HandleClickItemMenu} paintDrip className="nav__link"  to="/recettes">
                        <span className="nav__link__item">Recettes</span>
                    </AniLink>
                    <Link onClick={this.HandleClickItemMenu} className="nav__link"  to="/pages">
                        <span className="nav__link__item">autour des ramens</span>
                    </Link>
                    <Link onClick={this.HandleClickItemMenu} className="nav__link"  to="/contact">
                        <span className="nav__link__item">Une question ?</span> 
                    </Link>
                    <Link onClick={this.HandleClickItemMenu} className="nav__link"  to="/mentions">
                        <span className="nav__link__item">Mentions légales</span>
                    </Link>
                </div>
            </nav>

            <div id="hamburger"  onMouseLeave={this.HandleMouseLeaveBurger} onMouseEnter={this.HandleMouseEnterBurger} onClick={this.HandleClickBurger} className="hamburger">
                <span id="patty1" className="hamburger__patty"></span>
                <span id="patty2" className="hamburger__patty"></span>
                <span id="patty3" className="hamburger__patty"></span>
                <span id="patty4" className="hamburger__patty"></span>
            </div>
            </>
        );
    }
}

export default Menu;

/*
export const pageQuery = graphql`
    query MenuCategories {
        allContentfulCategorie {
            nodes {
                id
                titre
                slug
            }
        }
    }
`
*/