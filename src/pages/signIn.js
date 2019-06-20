import React from "react";

class SignIn extends React.Component {
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
export default  SignIn;