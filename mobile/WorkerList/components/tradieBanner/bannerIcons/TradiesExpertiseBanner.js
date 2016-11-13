import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../../workerListStyles';

const TradiesExpertiseBanner = ({ expertise, Icon }) =>
  (
    <View style={{flex:1 }}>
      <Text>
      { Icon }{' ' + expertise }
      </Text>
    </View>
  );
export default TradiesExpertiseBanner;
