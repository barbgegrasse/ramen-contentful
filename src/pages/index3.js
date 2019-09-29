import React, {Component} from "react"
import { TweenLite, Timeline, Linear, TweenMax, TimelineMax, Power1, Power0, Bounce } from "gsap";
import RamenNoobTxt from '../components/images/RamenNoobTxt.js'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BackgroundIntro00 from '../components/images/BackgroundIntro00.js'


class Index3 extends Component {
   
    gonext(action){
        action.play();
    }

    componentDidMount(){
		TweenLite.defaultEase = Linear.easeNone;
        TweenMax.set(".centered", {xPercent:-50, yPercent:-50});

        const action = new TimelineMax()
		//.to('#logo-txt',4.5,{opacity:0})
		.set('#logo-txt', {className:"+=anim-logo"} ) //On déclenche l'anim du logo
        .staggerFrom("#logo-txt", 4.3, {top:"+=0", opacity:1}, 4.3) //On attend 4.3 sec que l'anim se fasse
        .to('#logo-txt',0.5,{opacity:0, ease: Power1.easeInOut}) // On réduit l'opacité du logo
        .to('#wrapper-logo',0.5,{opacity:0, ease: Power1.easeInOut}) //On réduit l'opacité du conteneur maitre pour laisser apparaitre le premier slide
        .to('#wrapper-logo',0.5,{display:"none", ease: Power1.easeInOut})
        .set('#elem01', {className:"+=addbg"} )

		.addLabel('logo')
        .to('#main-nav',1,{top:40, ease: Power1.easeOut},'logo')
        .to('#line',0.5,{width:'300px',ease: Power1.easeOut}) //On anime la barre du milieu
        .addLabel('endbar')

        .to('#upper .hide-logo',0.5,{top:0,ease: Power1.easeOut},'endbar') //On affiche la partie supérieur du logo
        .to('#lower .hide-logo',0.5,{top:0,ease: Power1.easeOut},'endbar') //On affiche la partie inférieur du logo
        .to('#goNext',0.75,{scale:1.3, ease: Bounce.easeOut})//On fais pulser les boutons de nav
        .to('#goRecettes',2,{rotation:-90, scale:1.3, ease: Bounce.easeOut}) //On fait pulser les boutons de nav
		.to('#elem01',1,{opacity:1, ease: Power1.easeOut},'logo')
		.to('#elem01',2,{scale:1,ease: Power1.easeOut},'logo')

        .addPause().addLabel('two')
        .to('#elem01', 2, { scale: 1.1, ease: Power1.easeOut }, 'two')
        .to('#intro02',0.6,{xPercent:-100,ease: Power1.easeOut},'two') 
        .to('.intro01',0.6,{xPercent:200,ease: Power1.easeOut},'two') //On bouge le premier panel de gauche
        .to('.elemRight03a',0.6,{xPercent:-100,ease: Power1.easeOut},'two') //On bouge le panel de droite supérieur
        .to('.intro03',0.6,{xPercent:-100,ease: Power1.easeOut},'two') //On bouge le panel de droite inférieur
        .to('#titreTileRamen',0.7,{top:0, opacity: 1,ease: Power1.easeOut},'two') //On fait apparaitre la famosa question
        .to('#descTileRamen',0.7,{bottom:0, opacity: 1,ease: Power1.easeOut},'two') //On fait apparaitre la famosa reponse

        .addPause().addLabel('three')
        .to('.elemRight03a',0.5,{xPercent:-200  ,ease: Power1.easeOut},'three')
        .to('.intro01'     ,0.5,{xPercent: 100  ,ease: Power1.easeOut},'three') //On Retire en meme temps le premier panel Ramen
        .to('.bouillon'    ,0.5,{xPercent:-100  ,ease: Power1.easeOut},'three')//animation du panel bouillon
        .to('#intro02'     ,0.5,{xPercent:-200  ,ease: Power1.easeOut},'three') //On dégage le panel question reponse
        .to('#bouillonTxt' ,0.5,{xPercent:-100  ,ease: Power1.easeOut},'three') //On Fait apparaitre notre texte sur le bouillon
        .to('#titreTileBouillon',0.7,{top:0, opacity: 1,ease: Power1.easeOut},'three') //On fait apparaitre la famosa question
        .to('#descTileBouillon',0.7,{bottom:0, opacity: 1,ease: Power1.easeOut},'three') //On fait apparaitre la famosa reponse

        .addPause().addLabel('four')//bouillon terminado
        .to('#bouillonTxt' ,0.6,{xPercent:-200  ,ease: Power1.easeOut},'four') //On décale le panel bouillon avec le texte
        .to('#intro03' ,0.6,{xPercent:-200  ,ease: Power1.easeOut},'four') //On décale le premier panel d'intro avec le M. en bas à droite
        .to('#BigNoodle' ,0.6,{xPercent:-100  ,ease: Power1.easeOut},'four') //Anime la grande illustration des nouiilles
        .to('#LittleNoodle' ,0.6,{xPercent:-200  ,ease: Power1.easeOut},'four') //On anime la team naruto
        .to('#noodleTxt' ,0.6,{xPercent:-200  ,ease: Power1.easeOut},'four') //On anime le bloc de texte
        .to('#titreTileNoodle',0.7,{top:0, opacity: 1,ease: Power1.easeOut},'four') //On fait apparaitre la famosa question
        .to('#descTileNoodle',0.7,{bottom:0, opacity: 1,ease: Power1.easeOut},'four') //On fait apparaitre la famosa reponse

        .addPause().addLabel('five')//Noodle terminado
        .to('#tareTxt' ,0.5,{xPercent:-100  ,ease: Power1.easeOut},'five') //On anime le bloc de texte
        .to('#illuTare' ,0.5,{xPercent:-100  ,ease: Power1.easeOut},'five') //On anime l'illu de la partie Tare
        .to('#titreTileTare',0.7,{top:0, opacity: 1,ease: Power1.easeOut},'five') //On anime la partie sup du texte
        .to('#descTileTare',0.7,{bottom:0, opacity: 1,ease: Power1.easeOut},'five') //On anime la partie inf du texte

        .addPause().addLabel('six')//Oil terminado
        .to('#oilTxt' ,0.5,{xPercent:200  ,ease: Power1.easeOut},'six') //On anime le bloc de texte
        .to('#illuOil' ,0.5,{xPercent:-100  ,ease: Power1.easeOut},'six') //On anime l'illu de la partie Tare
        .to('#titreTileOil', 0.7, { top: 0, opacity: 1, ease: Power1.easeOut }, 'six') //On anime la partie sup du texte
            .to('#descTileOil', 0.7, { bottom: 0, opacity: 1, ease: Power1.easeOut }, 'six') //On anime la partie inf du texte

        .addPause().addLabel('six')//Garniture terminado
        .to('#toppingTxt' ,0.5,{yPercent:-100  ,ease: Power1.easeOut},'seven') //On anime le bloc de texte
        .to('#illuTopping' ,0.5,{yPercent:100  ,ease: Power1.easeOut},'seven') //On anime l'illu de la partie Tare
        .to('#titreTileTopping', 0.7, { top: 0, opacity: 1, ease: Power1.easeOut }, 'seven') //On anime la partie sup du texte
        .to('#descTileTopping', 0.7, { bottom: 0, opacity: 1, ease: Power1.easeOut }, 'seven') //On anime la partie inf du texte

		window.addEventListener('wheel', function(e) {
			console.log(e.detail)
			//Normalize event wheel delta
			//var delta = e.originalEvent.wheelDelta / 30 || -e.originalEvent.detail;
			const delta = e.wheelDelta / 30 || -e.detail
			if(!action.isActive() && delta < -1)
			{
				console.log(action.currentLabel)
				action.play();
			}
			else if(!action.isActive() && delta > 1)
			{
				console.log(action.currentLabel())
				action.reverse();
			}
			e.preventDefault();
        })
        
        document.querySelector("#goNext").addEventListener("click", function(){
            action.play();
        });
        document.querySelector("#goRecettes").addEventListener("click", function(){
            action.kill();
        });
    }

    render(){
        return(
            <>
                <div id="wrapper-logo" className="wrapper-logo">
                    <div className="relative">
                        <div className="block-logo">
                            <RamenNoobTxt />
                        </div>
                    </div>
                </div>
                <div id="main-nav" className="main-nav">
                    <div className="block-logo-txt">
                        <div className="top-logo" id="upperWrap">
                            <p id="upper" className="title-site">
                                <span className="hide-logo"> Ramen Noob</span>
                            </p>
                        </div>
                        <div className="line-logo" id="line"></div>
                        <div className="bottom-logo" id="lowerWrap">
                            <blockquote id="lower" className="quote-logo">
                                <span className="hide-logo">From Ramen Noob to Ramen Lord</span>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div id="goNext" className="go-next">
                    <div className="go-next-container">
                        <svg width="24" height="24" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64645 7.35355C3.84171 7.54882 4.15829 7.54882 4.35355 7.35355L7.53553 4.17157C7.7308 3.97631 7.7308 3.65973 7.53553 3.46447C7.34027 3.2692 7.02369 3.2692 6.82843 3.46447L4 6.29289L1.17157 3.46447C0.976311 3.2692 0.659728 3.2692 0.464466 3.46447C0.269204 3.65973 0.269204 3.97631 0.464466 4.17157L3.64645 7.35355ZM3.5 -2.18557e-08L3.5 7L4.5 7L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="white"/>
                        </svg>
                    </div>
                </div>

                <div id="goRecettes" className="go-to-recettes">
                    <div className="go-next-container">
                        <AniLink swipe direction="left" to="/recettes">
                            <svg width="24" height="24" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.64645 7.35355C3.84171 7.54882 4.15829 7.54882 4.35355 7.35355L7.53553 4.17157C7.7308 3.97631 7.7308 3.65973 7.53553 3.46447C7.34027 3.2692 7.02369 3.2692 6.82843 3.46447L4 6.29289L1.17157 3.46447C0.976311 3.2692 0.659728 3.2692 0.464466 3.46447C0.269204 3.65973 0.269204 3.97631 0.464466 4.17157L3.64645 7.35355ZM3.5 -2.18557e-08L3.5 7L4.5 7L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="white"/>
                            </svg>
                        </AniLink>
                    </div>
                </div>


                <BackgroundIntro00 />

                <div className="fromLeft intro01">

                </div>

				<div id="intro02" className="fromRight tile intro02">
					<h1 className="titretile-container">
                        <span id="titreTileRamen" className="titre-tile">Ramen ?</span>
                    </h1>
                    <div className="desctile-container ramen">
                        <p id="descTileRamen" className="desc-tile">
                            Ce bol de bonheur, c'est la parfaite combinaison de <span className="bold">cinq éléments</span>.
                        </p>
                    </div>
				</div>


				<div className="fromRight elemRight03a">

				</div>

				<div id="intro03" className="fromRight intro03">

				</div>

                {/*
                    BOUILLON PART
                    2 Blocs, Illustration + text
                */}
				<div className="fromCenter fullheight">
                    <div id="panel-bouillon" className="item bouillon">
                    </div>
				</div>

				<div id="bouillonTxt" className="fromRight tile bouillon-txt">
					<div className="titretile-container">
                        <h2 id="titreTileBouillon" className="titre-tile">Le bouillon</h2>
                    </div>
                    <div className="desctile-container noodle">
                        <p id="descTileBouillon" className="desc-tile">
                            C'est l'âme de votre bol, il peut-être de porc, de poulet, de poissons ou de légumes. 
                            <br />C'est l'âme de votre bol
                        </p>
                    </div>
				</div>

                {/*
                    NOODLES PART
                */}
				<div id="noodleTxt" className="fromRight tile noodle-txt">
					<div className="titretile-container">
                        <h2 id="titreTileNoodle" className="titre-tile">Nouilles</h2>
                    </div>
                    <div className="desctile-container">
                        <p id="descTileNoodle" className="desc-noodle desc-tile">
                            C'est la base de tout bon bol de ramen. C'est lui qui vous réchauffe le cœur au sens propre comme au figuré. Avec une bonne gorgée d'un bon bouillon, votre corps vous fera exulter de plaisir un bon "Ahhhh~". Le bouillon commence avec des ingrédients de base qui sont souvent composés de poulet, de porc, de fruits de mer et/ou de légumes. <br />
                            La clé d'un bon bouillon est d'extraire la saveur et le corps des ingrédients.
                        </p>
                    </div>
				</div>
				<div id="BigNoodle" className="fromRight fullheight noodle-big-illu">
				</div>
				<div id="LittleNoodle" className="fromRight noodle-small-illu">
				</div>

                {/*
                    TARE PART
                */}
				<div id="tareTxt" className="fromRight tile bottom tare-txt">
					<div className="titretile-container">
                        <h2 id="titreTileTare" className="titre-tile">Tare</h2>
                    </div>
                    <div className="desctile-container">
                        <p id="descTileTare" className="desc-tare desc-tile">
                            Shio, Shoyu, Miso... des mots qui préfixent le nom de votre bol de Ramen dans votre restaurant. Si ce n'est pas le cas fuyez ! <br /> 
                            Ils constituent la sauce de votre ramen mais aussi la base de l'asaisonement. 
                        </p>
                    </div>
				</div>
				<div id="illuTare" className="fromRight illu-tare">
				</div>

                {/*
                    OIL PART
                */}
				<div id="oilTxt" className="fromLeft tile oil-txt">
					<div className="titretile-container">
                        <h2 id="titreTileOil" className="titre-tile">L'huile</h2>
                    </div>
                    <div className="desctile-container">
                        <p id="descTileOil" className="desc-oil desc-tile">
                            Shio, Shoyu, Miso... des mots qui préfixent le nom de votre bol de Ramen dans votre restaurant. Si ce n'est pas le cas fuyez ! <br /> 
                            Ils constituent la sauce de votre ramen mais aussi la base de l'asaisonement. 
                        </p>
                    </div>
				</div>
				<div id="illuOil" className="fromRight illu-oil fullheight">
				</div>


                {/*
                    TOPPING PART
                */}
				<div id="toppingTxt" className="fromBottomRight tile topping-txt">
					<div className="titretile-container">
                        <h2 id="titreTileTopping" className="titre-tile">La Garniture</h2>
                    </div>
                    <div className="desctile-container">
                        <p id="descTileTopping" className="desc-topping desc-tile">
                            Shio, Shoyu, Miso... des mots qui préfixent le nom de votre bol de Ramen dans votre restaurant. Si ce n'est pas le cas fuyez ! <br /> 
                            Ils constituent la sauce de votre ramen mais aussi la base de l'asaisonement. 
                        </p>
                    </div>
				</div>
				<div id="illuTopping" className="fromTopLeft illu-topping fullheight">
				</div>
            </>
        )
    }
}


export default Index3;