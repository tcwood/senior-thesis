const initialState = {
  chatId: null,
  chatPeer: null,
  messageList: [],
  chatList: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('POPULATE_CHAT_LIST'):
      return {
        chatList: action.chatList,
      };
    // beware, GO_TO_CHAT doesn't seem to work yet...
    case ('GO_TO_CHAT'):
      console.log('inside GO_TO_CHAT reducer');
      return {
        chatId: action.chatId,
        chatPeer: action.chatPeer,
        messageList: [...action.messageList],
      };
    case ('ADD_MESSAGE'):
      return {
        messageList: [...state.messageList, action.message],
      };
    default: return state;
  }
};

export default chatsReducer;
