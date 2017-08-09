import { connect } from 'react-redux';
import { SetToken, Login, AddAccountToServer } from '../../../actions/auth';
import AddAccountPage from './add-account.component';

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
    addAccount: data => {
        dispatch(AddAccountToServer(data))
    }
  }
}

const AddAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAccountPage)

export default AddAccountContainer;
