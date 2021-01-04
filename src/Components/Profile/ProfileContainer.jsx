import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, userProfileThunkCreator} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom"
import {UsersAPI} from "../../api/api";


class ProfileContainer extends React.Component{
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
let mapStateToProps=(state)=>({
    profile: state.ProfilePage.profile
})
let UrlDataComponent= withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, userProfileThunkCreator})(UrlDataComponent)