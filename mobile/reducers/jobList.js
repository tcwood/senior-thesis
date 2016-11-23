
const jobListReducer = (state = { jobList: [] }, action) => {
  switch (action.type) {
    case ('ADD_JOB'):
      return {
        jobList: [...state.jobList, action.newJob],
      };
    case ('UPDATE_JOBLIST'):
      return {
        jobList: [...state.jobList, ...action.jobs],
        // latest: action.latest || state.latest,
      };
    default: return state;
  }
};

export default jobListReducer;
