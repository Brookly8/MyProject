import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authThunkCreator, setAuthUserData} from "../../redux/auth-reducer";
import {UsersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunkCreator()
    }

    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData, authThunkCreator})(HeaderContainer)