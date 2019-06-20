import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends React.Component {
    render() {
        //console.log(this.props.projects)
        return (
            <div className="row container">
                <div className="col s6">
                    {!this.props.projects ? (
                        <div>loading</div>
                    ) : (
                        this.props.projects.map(project => (
                            <ProjectCard {...project} />
                        ))
                    )}
                </div>
            </div>
        );
    }
}

function ProjectCard(props) {
    return (
        <div class="card blue lighten-2">
            <div class="card-content ">
                <span class="card-title">{props.title}</span>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

function ProjectDetial(props) {
    return (
        <div class="card blue lighten-2">
            <div class="card-content ">
                <span class="card-title">{props.title}</span>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

const stP = state => {
    //console.log(state)
    return { projects: state.firestore.ordered.project };
};

export default compose(
    firestoreConnect(() => [{ collection: "project" }]),
    connect(stP)
)(Dashboard);
