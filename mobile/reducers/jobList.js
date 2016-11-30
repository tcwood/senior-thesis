const jobListEntry = (state, action) => {
  switch (action.type) {
    case 'UPDATE_JOB':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, action.diff);
    default: return state;
  }
};

const initialState = {
  jobList: [],
  filter: '',
  showMap: false,
};

const jobListReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case 'ADD_JOB':
=======
    case ('ADD_JOB'):
    console.log('in ADD JOB reducer! action: ', action);
>>>>>>> addJob now gets saved in the store
      return {
        jobList: [...state.jobList, action.job],
        filter: state.filter,
        showMap: false,
      };
    case 'TOGGLE_SHOW_MAP':
      return {
        jobList: [...state.jobList],
        filter: state.filter,
        showMap: action.showMap,
      };
    case 'UPDATE_JOBLIST':
      return {
        jobList: [...state.jobList, ...action.jobs],
        filter: state.filter,
        showMap: false,
      };
    case ('CHANGE_FILTER'):
      return {
        jobList: state.jobList,
        filter: action.filter,
        showMap: state.showMap,
      };
    case 'UPDATE_JOB':
      return {
        jobList: state.jobList.map(job => jobListEntry(job, action)),
        filter: state.filter,
        showMap: state.showMap,
      };
    default: return state;
  }
};


export default jobListReducer;
