import { connect } from 'react-redux';
import { SetPassword } from '../../actions/auth';
import Password from './password.component';

const mapStateToProps = (state, ownProps) => {
    return {
        password: state.authentication.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPassword: field => {
            dispatch(SetPassword(field.target.value))
        }
    }
}

const PassWordcontainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Password)

export default PassWordcontainer;
