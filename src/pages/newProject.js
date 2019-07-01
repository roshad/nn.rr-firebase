import React from "react";

import { connect } from "react-redux";

class NewProject extends React.Component {
    state = { form: {} };
    handleChange = e => {
        this.setState({
            form: { ...this.state.form, [e.target.id]: e.target.value }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch({...this.state.form,createTime:new Date()});
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">title</label>
                        <input
                            id="title"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">content</label>
                        <textarea
                            id="content"
                            className="materialize-textarea"
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

export default connect(
    null,
    dtP
)(NewProject);
