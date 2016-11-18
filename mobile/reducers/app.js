const initialState = {
  token: '',
  profile: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GRANT_ACCESS':
      return {
        token: action.token,
        profile: state.profile,
      };
    default: return state;
  }
};

export default appReducer;
