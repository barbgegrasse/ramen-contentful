import React, {Component} from "react"




class Index3 extends Component {

    componentDidMount(){
        
        let scrolling = false;
        window.addEventListener('wheel', function(e) {
            scrolling = true
        });
        setInterval( function() {
            if ( scrolling ) {
                scrolling = false;
                const element = document.querySelector('.panel.active');
                element.classList.remove('active');
                element.nextSibling.classList.add('active');
                
            }
        }, 500 );
    }

    render(){
        return(
            <>
                <div className="kovsky-anim">
                    <div className="panel max active">
                        Panel max
                    </div>
                    <div className="panel half-width left">
                        Panel Half width
                    </div>
                    <div className="panel half-width right">
                        Panel Half width
                    </div>
                </div>
            </>
        )
    }
}


export default Index3;