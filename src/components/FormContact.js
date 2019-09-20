import React from 'react';
class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.stae)
    }

    render() {
        return (
            <form name={this.props.formName} method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value={this.props.formName} />
                <label>
                    Un joli pseudo :
                    <input name="pseudo" type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>

                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}



export default FormContact;