import { connect } from 'react-redux';
import Router from '../navigation/Router';
import JobList from '../components/JobList';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    jobs: state.jobList.jobList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToJob: (jobObj) => {
    const params = {
      job: jobObj,
    };
    ownProps.navigator.push(Router.getRoute('jobProfile', params));
  },
  updateJobs: () => {
    dispatch(Actions.updateJobList());
  },
});

const CreateJobList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobList);

export default CreateJobList;
