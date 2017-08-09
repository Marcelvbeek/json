import { connect } from 'react-redux';
import JsonViewer from './json-viewer.component';

const mapStateToProps = (state) => {
    return {
        title: state.authentication.token
    }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const JsonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonViewer)

export default JsonContainer;
