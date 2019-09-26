import React, {Component} from "react"
import { Tween, TweenLite, Timeline, Linear, TweenMax, TimelineMax, Power2, Bounce } from "gsap";
import RamenNoobTxt from '../components/images/RamenNoobTxt.js'
import AniLink from "gatsby-plugin-transition-link/AniLink";



class Index3 extends Component {
   
    gonext(action){
        action.play();
    }

    componentDidMount(){
		TweenLite.defaultEase = Linear.easeNone;
        TweenMax.set(".centered", {xPercent:-50, yPercent:-50});

        const action = new TimelineMax()
		//.to('#logo-txt',4.5,{opacity:0})
		.set('#logo-txt', {className:"+=anim-logo"} )
		.staggerFrom("#logo-txt", 4.3, {top:"+=0", opacity:1}, 4.3)
		.to('#elem01',0.5,{opacity:0})
        .to('#elem01',0,{scale:1.03, ease: Power2.easeInOut})
        //Anim logo
        .to('#logo-txt',0,{opacity:0, ease: Power2.easeInOut})

		.set('#elem01', {className:"+=addbg"} )
		.addLabel('logo')

        .to('#main-nav',1,{top:40, ease: Power2.easeOut},'logo')
        .to('#line',0.5,{width:'300px',ease: Power2.easeOut}) //On anime la barre du milieu
        .addLabel('endbar')

        .to('#upper .hide-logo',0.75,{top:0,ease: Power2.easeOut},'endbar') //On affiche la partie supérieur du logo
        .to('#lower .hide-logo',0.75,{top:0,ease: Power2.easeOut},'endbar') //On affiche la partie inférieur du logo
		.to('#elem01',1,{opacity:1, ease: Power2.easeOut},'logo')
		.to('#elem01',2,{scale:1,ease: Power2.easeOut},'logo')

        .addPause().addLabel('two')
        //.to('.intro h1',0.5,{y:65},'two')
        .to('#elem01', 2, { scale: 1.1, ease: Power2.easeOut }, 'two')
        .to('.elemRight02',0.5,{xPercent:-100,ease: Power2.easeOut},'two')
        .to('.elemLeft02',0.5,{xPercent:200,ease: Power2.easeOut},'two')
        .to('.elemRight03a',0.5,{xPercent:-100,ease: Power2.easeOut},'two')
        .to('.elemRight03b',0.5,{xPercent:-100,ease: Power2.easeOut},'two')

        .addPause().addLabel('three')
        //.to('.elemLeft02',0.5,{xPercent:100,ease: Power2.easeOut},'three')
        .set('#question', {className:"+=d-none"} )
        .set('#txt-bouillon', {className:"+=d-block"} )
        .to('.elemRight03a',0.5,{xPercent:-200,ease: Power2.easeOut},'three')
        .to('.bouillon',0.5,{xPercent:200,ease: Power2.easeOut},'three')
        //.to('.elemRight03b',0.5,{xPercent:-100,ease: Power2.easeOut},'three+=0.2')
        //.to('.elemRight03b .lineWrap',0.3,{rotation:360}, '-=0.5')
        .addPause().addLabel('bouillon')
        .set('#txt-bouillon', {className:"+=d-none"} )
        .set('#txt-nouilles', {className:"+=d-block"} )
        .to('.nouilles',0.5,{xPercent:200,ease: Power2.easeOut},'bouillon')

        .addPause().addLabel('four')
        .to('.elemTopLeft04',1,{yPercent:100,ease: Power2.easeInOut}, 'four')
		.to('.elemBottomRight04',1,{yPercent:-100,ease: Power2.easeInOut}, 'four')


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
    }

    render(){
        return(
            <>

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

                <div className="go-to-recettes">
                    <div className="go-next-container">
                        <AniLink swipe direction="left" to="/recettes">
                            <svg width="24" height="24" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.64645 7.35355C3.84171 7.54882 4.15829 7.54882 4.35355 7.35355L7.53553 4.17157C7.7308 3.97631 7.7308 3.65973 7.53553 3.46447C7.34027 3.2692 7.02369 3.2692 6.82843 3.46447L4 6.29289L1.17157 3.46447C0.976311 3.2692 0.659728 3.2692 0.464466 3.46447C0.269204 3.65973 0.269204 3.97631 0.464466 4.17157L3.64645 7.35355ZM3.5 -2.18557e-08L3.5 7L4.5 7L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="white"/>
                            </svg>
                        </AniLink>
                    </div>
                </div>

				<div id="elem01" className="wrap">
					<div className="master-container">
						<div className="block-logo">
							<RamenNoobTxt />
						</div>
					</div>
				</div>

                    
                <div className="fromLeft elemLeft02">
                    <div className="lineWrap centered">
                        
                    </div>
                </div>
				<div className="fromRight elemRight02">
					<h1 id="question"><span className="h-title">Les ramens <br /> qu'est ce que c'est ?</span></h1>
                    <p id="txt-bouillon" class="d-none "><span className="h-title">Bouillon</span></p>
                    <p id="txt-nouilles" class="d-none "><span className="h-title">Nouilles</span></p>
                    p
				</div>

				
				<div className="fromRight elemRight03a">
					<img src="https://unsplash.it/1000/500?image=766"/>
				</div>

				<div className="fromRight elemRight03b">
					<div className="lineWrap centered">
						<h1 className=""><span>no</span> 03</h1>
					</div>
				</div>

				<div className="fromLeft bouillon">

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