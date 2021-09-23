const initialState = {
  user: {
    isLoggenIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: {},
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggenIn: true,
          user: action.data,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggenIn: false,
          user: null,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
