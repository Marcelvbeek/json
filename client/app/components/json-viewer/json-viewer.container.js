import { connect } from 'react-redux';
import { SetActiveQuestion } from '../../actions/questiontree';
import JsonViewer from './json-viewer.component';

const mapStateToProps = (state) => {
    return {
        questions: state.questionTree.questionList,
        activeQuestion: state.questionTree.activeQuestion
    }
}

const mapDispatchToProps = dispatch => {
  return {
    setActiveQuestion: id => {
      dispatch(
        SetActiveQuestion(id)
      )
    }
  }
}

const JsonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonViewer)

export default JsonContainer;
