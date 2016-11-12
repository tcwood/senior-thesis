import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const TradiesExpertiseBanner = ({ expertise }) =>
  (
    <View className="TradiesExpertiseBanner">
      <Image
        className="miniBannerIcon"
        source={'./assets/hammerIcon.png'}
      />
      <Text>
        { expertise }
      </Text>
    </View>
  );
export default TradiesExpertiseBanner;
