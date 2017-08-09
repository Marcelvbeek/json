import { connect } from 'react-redux';
import { SetActiveQuestion } from '../../../actions/questiontree';
import List from './list.component';

const mapStateToProps = (state) => {
    return {
        questions: state.questionTree.filteredQuestions
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

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer;
