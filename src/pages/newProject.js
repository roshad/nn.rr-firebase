import React from "react";
import { withFirestore } from "react-redux-firebase";
import { compose } from "redux";
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
        this.props.firestore.collection("project").add({
            ...this.state.form,
            createTime: new Date(),
            user: this.props.username
        }).then(()=>{alert('success');window.location.href=''})
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

export default compose(
    withFirestore,
    connect(({ firebase: { profile: { username } } }) => ({ username }))
)(NewProject);
