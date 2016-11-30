import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/ChatList';

const ChatTile = ({ chat, goToChat }) => {
  console.log('from inside chatTile!', chat);
  return (<Text> Hello from chat tile...! </Text>);
  //   (<TouchableOpacity onPress={goToChat}>
  //     <View className="tradieRow" style={styles.row}>
  //       <View style={styles.rightRow}>
  //         <View style={styles.rowUserPic}>
  //           <Image
  //             style={styles.circularImage}
  //             source={{ uri: userInfo.profilePicUrl }}
  //           />
  //         </View>
  //         <View style={styles.banner}>
  //           <Text style={styles.name}>{userInfo.name}</Text>
  //         </View>
  //       </View>
  //     </View>
  //   </TouchableOpacity>
  // );
};

ChatTile.propTypes = {
  chat: React.PropTypes.object.isRequired,
  goToChat: React.PropTypes.func.isRequired,
};

export default ChatTile;
