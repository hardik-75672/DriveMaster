const initialState = {
  isLoggedin: false,
  user: null,
  userId: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case SET_USER:
    //   state = {
    //     isLoggedIn: true,
    //     user: payload.user,
    //     userId: payload.userId,
    //   };
    //   return state;
    // case RESET_USER:
    //   state = initialState;
    //   return state;
    default:
      return state;
  }
};

export default authReducer;
