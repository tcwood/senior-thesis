const initialState = {
  jobList: [],
  filter: '',
};

const jobListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_JOB'):
      return {
        jobList: [...state.jobList, action.newJob],
        filter: state.filter,
      };
    case ('UPDATE_JOBLIST'):
      return {
        jobList: [...state.jobList, ...action.jobs],
        filter: state.filter,
        // latest: action.latest || state.latest,
      };
    case 'CHANGE_FILTER':
      return {
        jobList: state.jobList,
        filter: action.filter,
      };
    default: return state;
  }
};

export default jobListReducer;
