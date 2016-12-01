import { connect } from 'react-redux';
import Router from '../navigation/Router';
import TradesmanList from '../components/TradesmanList';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  // pass all workers down as props (except for yourself)
  let allUsers = state.workerList.workers;
  const signedInUserMobile = state.profile.mobile;
  const filteredUsers = allUsers.filter((user) => { return (user.mobile !== signedInUserMobile); });

  return {
    users: filteredUsers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToWorker: (profileObj) => {
    const params = {
      peerProfile: true,
      user: profileObj,
    };
    ownProps.navigator.push(Router.getRoute('profile', params));
  },
  updateWorkers: () => {
    dispatch(Actions.updateWorkerList());
  },
});

const WorkerList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TradesmanList);

export default WorkerList;
