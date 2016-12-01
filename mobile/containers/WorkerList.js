import { connect } from 'react-redux';
import Router from '../navigation/Router';
import TradesmanList from '../components/TradesmanList';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  // pass  workers down as props (except for yourself)
  const users = state.workerList.workers;
  const signedInUserMobile = state.profile.msobile;
  const usersMinusYou = users.filter((user) => { return (user.mobile !== signedInUserMobile); });
  return {
    users: usersMinusYou,
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
  userFilter: (filter) => {
    dispatch(Actions.changeUserFilter(filter));
  },
});

const WorkerList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TradesmanList);

export default WorkerList;
