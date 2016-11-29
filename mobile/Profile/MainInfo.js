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

const MainInfo = ({ name, experience, contactInfo, peer }) => {
  const handlePhoneClick = () => {
    Linking.canOpenURL(contactInfo).then((supported) => {
      if (supported) {
        Linking.openURL(contactInfo);
      } else {
        console.log(`Don't know how to open URI: ${contactInfo}`);
      }
    });
  };
  const handleChatClick = () => {

  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.experience}>
        {experience}
      </Text>
      <View style={styles.contact}>
        <Text style={styles.phoneNumber} onPress={handlePhoneClick}>
          <FontAwesome
            name="phone"
            size={20}
            color="#006600"
          />
          {` ${contactInfo}`}
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
