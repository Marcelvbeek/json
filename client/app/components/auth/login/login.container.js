import { connect } from 'react-redux';
import { SetToken, Login, AuthenticateToServer } from '../../../actions/auth';
import LoginPage from './login.component';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.authentication
    }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => {
        dispatch(SetToken(token))
    },
    login: data => {
        dispatch(AuthenticateToServer(data))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginContainer;
