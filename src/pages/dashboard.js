import React from "react";

import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

import moment from 'moment'
class Dashboard extends React.Component {
    render() {
        console.log(this);

        let { not, pro } = this.props;
        return (
            <div className="row container">
                <div className="col s6">
                    {!pro ? (
                        <div>loading</div>
                    ) : (
                        pro.map(project => <ProjectCard {...project} />)
                    )}
                </div>
                <div className="col s6">
                    {!not ? <div>loading</div> : <NotCard noti={not} />}
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

function NotCard(props) {
    return (
        <div class="card ">
            <div class="card-content ">
                {props.noti.map(not => (
                    <div>
                        {not.user + " "}
                        <span className="pink-text">{not.type + " "}</span>
                        {not.title}
                        <div className="grey-text right-align">{moment(not.time.toDate()).fromNow()}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const stP = state => {
    return {
        pro: state.firestore.ordered.project,
        not: state.firestore.ordered.notification
    };
};

export default compose(
    connect(stP),
    firestoreConnect([{collection:"notification",limit:10}, {collection:"project",limit:5}])
)(Dashboard);
