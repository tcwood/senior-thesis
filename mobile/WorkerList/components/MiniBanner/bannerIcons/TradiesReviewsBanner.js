import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const TradiesReviewsBanner = ({ numReviews }) =>
  (
    <View className="TradiesReviewsBanner">
      <Image
        className="miniBannerIcon"
        source={'./assets/reviewIcon.png'}
      />
      <Text>
        { numReviews } reviews
      </Text>
    </View>
  );

export default TradiesReviewsBanner;
