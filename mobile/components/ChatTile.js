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
  console.log('from chatTile... chat', chat.Messages);
  const handleClick = () => goToChat(chat.id, otherUser, chat.Messages);

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.row}>
        <Image
          style={styles.circularImage}
          source={{ uri: otherUser.profilePicUrl }}
        />
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
