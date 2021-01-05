import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {userProfileThunkCreator} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.userProfileThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }


}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)



let mapStateToProps = (state) => ({
    profile: state.ProfilePage.profile,
    isAuth: state.auth.isAuth
})
let UrlDataComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {userProfileThunkCreator})(UrlDataComponent)