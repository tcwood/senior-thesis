import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const TradiesReviewsBanner = ({ reviews, Icon }) =>
  (
    <View style={{flex: 1}}>
      <Text>
        {Icon}{ ' '.concat(reviews).concat(' reviews')}
      </Text>
    </View>
  );

export default TradiesReviewsBanner;
