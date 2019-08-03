import React from "react";

import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";

class SignIn extends React.Component {
    state = { credentials: {} };
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.id]: e.target.value
            }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.props.firebase);
        
        this.props.firebase
            .login(this.state.credentials)        
    };
    render() {
        return (
            <div className="container">
                <form className='white' onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label>email</label>
                        <input
                            id="email"
                            type="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label>password</label>
                        <input
                            id="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="waves-effect waves-light btn">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}



export default compose(
    withFirebase,    
)(SignIn);
