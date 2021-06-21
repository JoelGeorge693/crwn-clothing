import SignInActionsTypes from "./sign-in-option.types";

const INITIAL_STATE = {
  hidden: false,
};

const SignInOptionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInActionsTypes.SIGN_OPTION_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default SignInOptionReducer;
