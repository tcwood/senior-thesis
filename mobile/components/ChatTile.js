import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/ChatList';

const ChatTile = ({ chat, goToChat, profile }) => {
  const otherUser = chat.user1.id === profile.id ? chat.user2 : chat.user1;
  return (
    <TouchableOpacity onPress={goToChat}>
      <View style={styles.row}>
        <View style={styles.rowUserPic}>
          <Image
            style={styles.circularImage}
            source={{ uri: otherUser.profilePicUrl }}
          />
        </View>
        <Text style={styles.name}>{otherUser.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

ChatTile.propTypes = {
  chat: React.PropTypes.object.isRequired,
  goToChat: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object,
};

export default ChatTile;
