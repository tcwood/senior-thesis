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
    const { chatList, goToChat, profile } = this.props;
    console.log('profile from within chatList', profile);
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
              profile={profile}
            />),
          )}
        </ScrollView>
      </View>
    );
  }
}

ChatList.propTypes = {
  chatList: React.PropTypes.array.isRequired,
  goToChat: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object,
};

export default ChatList;
