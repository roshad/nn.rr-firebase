import React from 'react';

import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase'

class Dashboard extends React.Component {
    
    render() {
        return (
            <div className='row container'>
                <div className='col s6'>
                    <ProjectCard title='shit'/>
                    <ProjectCard/>
                </div>
            </div>
        )
    }
}

function ProjectCard (props) {    
    
        return (            
            <div class="card blue lighten-2">
            <div class="card-content ">
              <span class="card-title">{props.title}</span>
              <p>{props.content}</p>
            </div>
            
          </div>
          
        )
    
}

const stP=(state)=>console.log(state)


export default compose(
    connect(stP),
    firestoreConnect([{collection:'project'}])
)(Dashboard);