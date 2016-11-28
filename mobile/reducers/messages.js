const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case ('ADD_MESSAGE'):
      return {
        messageList: [...state.messageList, action.newMessage],
      };
    default: return state;
  }
};

export default messagesReducer;
