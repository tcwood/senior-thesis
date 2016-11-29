const initialState = {
  chatId: null,
  chatPeer: null,
  messageList: [],
};

const messagesReducer = (state = initialState, action) => {
  console.log('in messagesReducer-  action', action);
  switch (action.type) {
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
