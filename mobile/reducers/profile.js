const initialState = {
  name: '',
  mobile: '',
  profession: '',
  description: '',
  experience: '',
  location: '',
  profilePicUrl: '',
  id: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return Object.assign({}, state, action.diff);
    default: return state;
  }
};

export default profileReducer;
