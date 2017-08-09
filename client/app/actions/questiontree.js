import { SETACTIVEQUESTION, SETQUESTIONS, SEARCH } from '../constants'

export const SetActiveQuestion = id => {
    return {
        type: SETACTIVEQUESTION,
        id: id
    }
}

export const SetActiveQuestions = data => {
    return {
        type: SETQUESTIONS,
        questions: data.questions
    }
}

export const Search = query => {
    return {
        type: SEARCH,
        query: query
    }
}