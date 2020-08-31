import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR, } from '../../actions/questions/questionsActions'


const initialState = {
  loading: false,
  questions: [],
  error: null
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        loading: true,
        error: null,
        questions: action.payload.questions
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        questions: action.payload.questions
      };
    case GET_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}