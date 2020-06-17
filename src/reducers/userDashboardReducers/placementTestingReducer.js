import {
  GET_CHILD_QUESTIONS, 
  START_TEST,
  NEXT_PAGE, 
  PREV_PAGE, 
  START_TEST_TIMER, 
  TEST_TIME_OUT
 } from "../../actions/userDashboardActions/placementActions";

 const initialState = {
  timerActive: false,
  questions: [],
  currentQuestion: {},
  page: 0,
  userAwnsers: []
};

export const placementTestingReducer = (state = initialState, { type, payload }) => {
  const currentQuestion = () => {
    return state.questions.filter(question => question.key === state.page + 1 ) // page starts at 2 for test
  }
  switch (type) {
    case GET_CHILD_QUESTIONS:
      return {
        ...state,
        questions: payload
      };
      
    case START_TEST:
      console.log(payload)
      return {
        ...state,
        page: state.page + 1,
        currentQuestion: currentQuestion()
      };

		case NEXT_PAGE:
      console.log(payload)
			return {
				...state,
        page: state.page + 1,
        userAwnsers: [...state.userAwnsers, payload],
        currentQuestion: currentQuestion()
			};

      case START_TEST_TIMER:
        return {
          ...state,
          timerActive: true
        }
        
      case TEST_TIME_OUT:
        return {
          ...state,
          timerActive: false
        }

    default:
      return state;
  }
};