import { connect } from 'react-redux';
// import Messages from '../components/Messages';
import Messages from '../components/Messages';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    chatId: state.chats.chatId,
    peer: state.chats.chatPeer,
    messageList: state.chats.messageList,
    chatList: state.chats.chatList,
  };
};

const mapDispatchToProps = dispatch => ({
  newMessage: msg => dispatch(Actions.newMessage(msg)),
});

const ChatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default ChatsContainer;
