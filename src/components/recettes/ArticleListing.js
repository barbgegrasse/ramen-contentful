import React from "react"
import Img from "gatsby-image"

class ArticleListing extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <>
                <div className="col-sm-4 col-12">
                    <Img sizes={this.props.sizes} />
                    <h3>
                        {this.props.titre}
                    </h3>
                </div>
            </>
        )
    }
}

export default ArticleListing
