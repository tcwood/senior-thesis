import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  name: {
    fontSize: 34,
  },
  experience: {
    fontSize: 14,
    marginTop: 10,
  },
  contact: {
    width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  phoneNumber: {
    color: '#006600',
    alignItems: 'center',
    fontSize: 20,
  },
  chatButton: {
    backgroundColor: '#395b91',
    height: 22,
  },
});

// userInfo and ownInfo are different when looking at a peer's profile.
// these are used when a new chat is created
const MainInfo = ({ peer, newChat, userInfo, ownInfo }) => {
  const handlePhoneClick = () => {
    Linking.canOpenURL(userInfo.mobile).then((supported) => {
      if (supported) {
        Linking.openURL(userInfo.mobile);
      } else {
        console.log(`Don't know how to open URI: ${userInfo.mobile}`);
      }
    });
  };

  const handleChatClick = () => {
    newChat(ownInfo, userInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}> {userInfo.name}</Text>
      <Text style={styles.experience}>
        {userInfo.description}
      </Text>
      <View style={styles.contact}>
        <Text style={styles.phoneNumber} onPress={handlePhoneClick}>
          <FontAwesome
            name="phone"
            size={20}
            color="#006600"
          />
          {` ${userInfo.mobile}`}
        </Text>
        { peer &&
        <TouchableOpacity style={styles.chatButton} onPress={handleChatClick}>
          <Text style={{ color: 'white' }}> Start chat </Text>
        </TouchableOpacity>
        }
      </View>
    </View>
  );
};

export default MainInfo;
