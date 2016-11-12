import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const TradiesReviewsBanner = ({ reviews }) =>
  (
    <View className="TradiesReviewsBanner">
      <Image
        className="miniBannerIcon"
        source={'./assets/reviewIcon.png'}
      />
      <Text>
        { reviews + ' reviews'}
      </Text>
    </View>
  );

export default TradiesReviewsBanner;
