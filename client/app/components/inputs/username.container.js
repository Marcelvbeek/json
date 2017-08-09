import { connect } from 'react-redux';
import { SetUser } from '../../actions/auth';
import Username from './username.component';

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.authentication.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUsername: field => {
            dispatch(SetUser(field.target.value))
        }
    }
}

const UsernameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Username)

export default UsernameContainer;
