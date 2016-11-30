import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles/ChatList';
import ChatTile from '../components/ChatTile';
// import Tradesman from './Tradesman';

class ChatList extends React.Component {
  // componentDidMount() {
  //   const { updateWorkers } = this.props;
  //   updateWorkers();
  // }
  render() {
    // const { users, goToWorker } = this.props;
    const { chatList, goToChat } = this.props;
    return (
      <View >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {chatList.map((chat, i) =>
            (<ChatTile
              key={i}
              chat={chat}
              goToChat={() => { goToChat(chat); }}
            />),
          )}
        </ScrollView>
      </View>
    );
  }
}

ChatList.propTypes = {
  chatList: React.PropTypes.object.isRequired,
  goToChat: React.PropTypes.func.isRequired,
};

export default ChatList;
