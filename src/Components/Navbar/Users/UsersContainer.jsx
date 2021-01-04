import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setFollowingProgress,
    unfollow, unfollowThunkCreator
} from "../../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   setFollowingProgress={this.props.setFollowingProgress}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingProgress,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
})(UsersAPIContainer)

export default UsersContainer