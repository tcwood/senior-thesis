import { connect } from 'react-redux';
// import Messages from '../components/Messages';
import ChatList from '../components/ChatList';
import Actions from '../actions/index';
import Router from '../navigation/Router';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    chatId: state.chats.chatId,
    peer: state.chats.chatPeer,
    messageList: state.chats.messageList,
    chatList: state.chats.chatList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToChat: (chatId, chatPeer, messageList) => {
    dispatch(Actions.goToChat(chatId, chatPeer, messageList));
    ownProps.navigator.push(Router.getRoute('messages'));
  },

});

const ChatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);

export default ChatsContainer;

