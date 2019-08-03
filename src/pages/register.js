import React from "react";

import { compose } from "redux";
import { withFirebase } from "react-redux-firebase";

class Register extends React.Component {
    state = { form: {} };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.id]: e.target.value
            }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        
        
        const {password,username,email} = this.state.form 
        this.props.firebase
            .createUser({password,email},{username,email})
            .then(()=>window.location.href = 'Dashboard')        
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
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
                    <div className="input-field">
                        <label>username</label>
                        <input
                            id="username"
                            type='text'                            
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
)(Register);
