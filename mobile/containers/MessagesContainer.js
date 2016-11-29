import { connect } from 'react-redux';
// import Router from '../navigation/Router';
import Messages from '../components/Messages';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    // Will want to input list of users / profiles for chat list
  };
};

const mapDispatchToProps = dispatch => ({
  // haven't done any sort of testing if this works yet, will likely need to add
  // a parameter into newMessage() with correct message info object
  newMessage: msg => dispatch(Actions.newMessage(msg)),

  // Will need to update this to make reduxy, but should parallel change job list
  // goToChat: (chatObj) => {
  //   const params = {
  //     chat: chatObj,
  //   };
  //   ownProps.navigator.push(Router.getRoute('', params));
  // },
});

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;

