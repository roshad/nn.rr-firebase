import React from 'react';

export default function newProject(props) {
    return (
        <div className='container'>
            <form>
                <div className="input-field">
                    <label htmlFor='name' >name</label>
                    <input id='name'  type="text"></input>
                </div>
                <div className="input-field">
                    <label htmlFor='content' >content</label>
                    <textarea id='content'  className='materialize-textarea'></textarea>
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}