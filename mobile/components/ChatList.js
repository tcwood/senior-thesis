import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles/ChatList';
// import Tradesman from './Tradesman';

class ChatList extends React.Component {
  // componentDidMount() {
  //   const { updateWorkers } = this.props;
  //   updateWorkers();
  // }

  render() {
    // const { users, goToWorker } = this.props;
    const { chats, goToChat } = this.props;
    return (
      <View >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {chats.map((chat, i) =>
            (<ChatTile
              key={i}
              chatInfo={chat}
              pressChat={() => { goToChat(chat); }}
            />),
          )}
        </ScrollView>
      </View>
    );
  }
}

ChatList.propTypes = {
  chats: React.PropTypes.object.isRequired,
  goToChat: React.PropTypes.func.isRequired,
};

export default ChatList;
