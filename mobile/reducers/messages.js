const initialState = {
  chatId: null,
  chatPeer: null,
  messageList: [],
  chatList: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('POPULATE_CHAT_LIST'):
      return Object.assign({}, state,
        {
          chatList: action.chatList,
        },
      );
    case ('GO_TO_CHAT'):
      return Object.assign({}, state,
        {
          chatId: action.chatId,
          chatPeer: action.chatPeer,
          messageList: [...action.messageList],
        },
      );
    case ('ADD_MESSAGE'):
      return Object.assign({}, state,
        {
          messageList: [...state.messageList, action.message],
        },
      );
    default: return state;
  }
};

export default chatsReducer;
