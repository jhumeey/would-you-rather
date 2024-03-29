import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { _saveQuestionAnswer } from '../../../utils/_DATA'
import { addAnswerToQuestion } from '../questions/questionsActions'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_VOTE_TO_USER = 'ADD_VOTE_TO_USER'



export const fetchUsers = users => {
  return {
    type: GET_USERS,
    payload: {
      users,
    }
    
  }
}


export const addQuestionToUser = (author, id) => ({
  type: ADD_QUESTION_TO_USER,
  payload: {
    author,
    id,
  }
})

const addAnswerToUser = (authedUser, qid, option) =>({
  type: ADD_VOTE_TO_USER,
  payload: {
    authedUser,
    qid,
    option,
  }
})

export function handleSaveQuestionAnswer(authedUser, qid, option) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer({
      authedUser,
      qid,
      answer: option
    })
    .then(() => {
      dispatch(addAnswerToUser(authedUser, qid, option ))
      dispatch(addAnswerToQuestion(authedUser, qid, option ))
    })
    .then(() => dispatch(hideLoading()))

  };
}