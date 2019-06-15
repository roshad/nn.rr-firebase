import React from 'react';

import {connect} from 'react-redux'

import {creatorProject} from '../creatorProject'
class NewProject extends React.Component {
    state = {form:{}}
    handleChange = (e) => {
        this.setState({form:{...this.state.form,[e.target.id]:e.target.value}})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(this.state.form)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor='name' >name</label>
                        <input id='name' type="text" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor='content' >content</label>
                        <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <button className='waves-effect waves-light btn'>Submit</button>
                </form>
            </div>
        )
    }
}



const dtP = (dispatch)=>{return {dispatch:(form)=>dispatch(creatorProject(form))}}

export default connect(null,dtP)(NewProject);