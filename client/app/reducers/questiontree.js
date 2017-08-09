import { SETACTIVEQUESTION, SETQUESTIONS, SEARCH } from '../constants'
import questionMapper from '../services/questionMapper'
import { json } from '../data/question';

const initialState = {
  activeQuestion: {
    fields:[]
  },
  questionList: json,
  filteredQuestions: json
}

export default function questionTree(state = initialState, action) {
  switch(action.type) {
    case SETACTIVEQUESTION: 
        var activeQuestion = state.questionList.find(question => {
            return question.id == action.id;
        });
        var mappedQuestion = new questionMapper(activeQuestion);
        activeQuestion.fields = mappedQuestion.getFieldsForQuestion();
        return Object.assign({}, state, {
            activeQuestion: activeQuestion
        })
    case SETQUESTIONS: 
        return Object.assign({}, state, {
            questionList: action.questions
        })
    case SEARCH: 
        return Object.assign({}, state, {
            filteredQuestions: state.questionList.filter(question => {
                var regEx = new RegExp('^' + action.query, 'i');
                if(regEx.test(question.titel)) {
                    return true;
                }
                if(regEx.test(question.id)) {
                    return true;
                }
            })
        })
    default:
      return state
  }
}