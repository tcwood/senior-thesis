const initialState = {
  chatId: null,
  chatPeer: null,
  messageList: [],
  chatList: [],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('POPULATE_CHAT_LIST'):
      return {
        chatList: action.chatList,
      };
    // beware, GO_TO_CHAT doesn't seem to work yet...
    case ('GO_TO_CHAT'):
      return {
        chatId: action.chatId,
        chatPeer: action.chatPeer,
        messageList: [...action.messageList],
      };
    case ('ADD_MESSAGE'):
      return {
        messageList: [...state.messageList, action.message.text],
      };
    default: return state;
  }
};

export default messagesReducer;
