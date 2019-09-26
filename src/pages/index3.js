import React, {Component} from "react"
import { Tween, TweenLite, Timeline, Linear, TweenMax, TimelineMax, Power2, Bounce } from "gsap";
import RamenNoobTxt from '../components/images/RamenNoobTxt.js'
import Arrow from '@elsdoerfer/react-arrow';



class Index3 extends Component {
   
    componentDidMount(){
		TweenLite.defaultEase = Linear.easeNone;
        TweenMax.set(".centered", {xPercent:-50, yPercent:-50});

        const action = new TimelineMax()
		//.to('#logo-txt',4.5,{opacity:0})
		.set('#logo-txt', {className:"+=anim-logo"} )
		.staggerFrom("#logo-txt", 4.3, {top:"+=0", opacity:1}, 4.3)
		.to('#elem01',0.5,{opacity:0})
		.to('#elem01',0,{scale:1.03, ease: Power2.easeInOut})
        .to('#logo-txt',0,{opacity:0, ease: Power2.easeInOut})
		.set('#elem01', {className:"+=addbg"} )
		.addLabel('logo')

        .to('#main-nav',1,{top:40, ease: Power2.easeOut},'two')
		.to('#elem01',1,{opacity:1, ease: Power2.easeOut},'two')
		.to('#elem01',2,{scale:1,ease: Power2.easeOut},'two')

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
				console.log("play");
				action.play();
			}
			else if(!action.isActive() && delta > 1)
			{
				console.log("reverse");
				action.reverse();
			}
			e.preventDefault();
		})
    }

    render(){
        return(
            <>
                <div id="main-nav" className="main-nav">
                    <p className="title-site">
                        Ramen <br /> Noob
                    </p>
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