import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import styles from '../styles/WorkerList';
import TradieBanner from './TradieBanner';

const Tradesman = ({ userInfo, pressUser }) => {
  return (
    <TouchableOpacity onPress={pressUser}>
      <View className="tradieRow" style={styles.row}>
        <View style={styles.rightRow}>
          <View style={styles.rowUserPic}>
            <Image
              style={styles.circularImage}
              source={{ uri: userInfo.profilePicUrl }}
            />
          </View>
        </View>
        <Text style={{'textAlign': 'center'}}>{userInfo.name}</Text>
          <TradieBanner
            profession={userInfo.profession}
            location={userInfo.location}
            rating={userInfo.rating}
            styles={styles}
          />
      </View>
    </TouchableOpacity>
  );
};

export default Tradesman;
