import React from 'react';

import {connect} from 'react-redux'

class Dashboard extends React.Component {
    
    render() {
        return (
            <div className='row container'>
                <div className='col s5'>
                    <ProjectCard/>
                </div>
            </div>
        )
    }
}

class ProjectCard extends React.Component {
    
    render() {
        return (
            <div class="card blue lighten-2">
            <div class="card-content ">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            
          </div>
        )
    }
}

export default Dashboard;