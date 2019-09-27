import React, {Component} from "react"
import { TweenLite, Timeline, Linear, TweenMax, TimelineMax, Power1, Power0, Bounce } from "gsap";
import RamenNoobTxt from '../components/images/RamenNoobTxt.js'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BackgroundIntro00 from '../components/images/BackgroundIntro00.js'
import BackgroundIntro01 from '../components/images/BackgroundIntro01.js'



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
		//.to('#elem01',0.5,{opacity:0})
        //.to('#elem01',0,{scale:1.03, ease: Power1.easeInOut})
        //Anim logo
        

        .set('#elem01', {className:"+=addbg"} )
        
        
		.addLabel('logo')

        .to('#main-nav',1,{top:40, ease: Power1.easeOut},'logo')
        .to('#line',0.5,{width:'300px',ease: Power1.easeOut}) //On anime la barre du milieu
        .addLabel('endbar')

        .to('#upper .hide-logo',0.75,{top:0,ease: Power1.easeOut},'endbar') //On affiche la partie supérieur du logo
        .to('#lower .hide-logo',0.75,{top:0,ease: Power1.easeOut},'endbar') //On affiche la partie inférieur du logo
        .to('#goNext',0.75,{scale:1.3, ease: Bounce.easeOut})//On fais pulser les boutons de nav
        .to('#goRecettes',2,{rotation:-90, scale:1.3, ease: Bounce.easeOut}) //On fait pulser les boutons de nav
		.to('#elem01',1,{opacity:1, ease: Power1.easeOut},'logo')
		.to('#elem01',2,{scale:1,ease: Power1.easeOut},'logo')

        .addPause().addLabel('two')
        //.to('.intro h1',0.5,{y:65},'two')
        .to('#elem01', 2, { scale: 1.1, ease: Power1.easeOut }, 'two')
        .to('.intro02',0.6,{xPercent:-100,ease: Power1.easeOut},'two') 
        .to('.intro01',0.6,{xPercent:200,ease: Power1.easeOut},'two') //On bouge le premier panel de gauche
        .to('.elemRight03a',0.6,{xPercent:-100,ease: Power1.easeOut},'two') //On bouge le panel de droite supérieur
        .to('.intro03',0.6,{xPercent:-100,ease: Power1.easeOut},'two') //On bouge le panel de droite inférieur
        .to('#questionContainer .question',1,{top:0, opacity: 1,ease: Power1.easeOut},'two') //On fait apparaitre la famosa question
        .to('#reponseContainer .reponse',1,{bottom:0, opacity: 1,ease: Power1.easeOut},'two') //On fait apparaitre la famosa question

        .addPause().addLabel('three')
        .to('.elemRight03a',0.5,{xPercent:-200  ,ease: Power1.easeOut},'three')
        .to('.intro01'  ,0.5,{xPercent: 100  ,ease: Power1.easeOut},'three') //On Retire en meme temps le premier panel Ramen
        .to('.bouillon'    ,0.5,{xPercent:-100  ,ease: Power1.easeOut},'three')//animation du panel bouillon

        //.to("#detailReponse", 0.5, {text:"tare", ease:Linear.easeNone})//Changement du texte
        .addPause().addLabel('bouillon')
        .to('.nouilles',0.5,{xPercent:200,ease: Power1.easeOut},'bouillon')

        .addPause().addLabel('four')
        .to('.elemTopLeft04',1,{yPercent:100,ease: Power1.easeInOut}, 'four')
		.to('.elemBottomRight04',1,{yPercent:-100,ease: Power1.easeInOut}, 'four')


		window.addEventListener('wheel', function(e) {
			console.log(e.detail)
			//Normalize event wheel delta
			//var delta = e.originalEvent.wheelDelta / 30 || -e.originalEvent.detail;
			const delta = e.wheelDelta / 30 || -e.detail
			console.log(delta)
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
                                <span className="hide-logo"> Ramen  Noob</span>
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
                <BackgroundIntro01 />
                </div>
                
     
				<div className="fromRight intro02">
					<h1 id="questionContainer" className="question-container">
                        <span className="question">RAMEN</span>
                    </h1>
                    <div id="reponseContainer" className="reponse-container">
                        <p className="reponse">
                            C'est de  l'amour dans un bol, mais c'est surtout la parfaite combinaison de <span className="bold">cinq éléments</span>.
                        </p>
                    </div>
				</div>

				
				<div className="fromRight elemRight03a">
					<img src="https://unsplash.it/1000/500?image=766"/>
				</div>

				<div className="fromRight intro03">
					<div className="lineWrap centered">
						<h1 className=""><span>no</span> 03</h1>
					</div>
				</div>

				<div className="fromCenter fullheight">
                    <div id="panel-bouillon" className="item bouillon">
                    </div>
				</div>

				<div className="fromLeft nouilles">

				</div>
				
				<div className="fromTopLeft elemTopLeft04">
					<div className="lineWrap centered">
						<h1 className=""><span>no</span></h1>
					</div>
				</div>
				<div className="fromBottomRight elemBottomRight04">
					<div className="lineWrap centered">
						<h1 className="">04</h1>
					</div>
				</div>

				
            </>
        )
    }
}


export default Index3;