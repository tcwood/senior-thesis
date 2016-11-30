import { connect } from 'react-redux';
// import Router from '../navigation/Router';
// import Messages from '../components/Messages';
import ChatList from '../components/ChatList';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    chatId: state.messages.chatId,
    peer: state.messages.chatPeer,
    messageList: state.messages.messageList,
    chatList: state.messages.chatList,
  };
};

const mapDispatchToProps = dispatch => ({
  // haven't done any sort of testing if this works yet, will likely need to add
  // a parameter into newMessage() with correct message info object
  newMessage: msg => dispatch(Actions.newMessage(msg)),

// TODO: ACUTALLY IMPLEMENT GOTOCHAT! (also look into comments below)
  goToChat: () => dispatch(Actions.goToChat()),

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
)(ChatList);

export default MessagesContainer;

