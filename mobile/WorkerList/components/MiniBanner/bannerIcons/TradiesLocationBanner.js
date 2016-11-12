import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const TradiesLocationBanner = ({ location }) =>
  // signature: text, icon, callback
  (
    <View className="TradiesLocationBanner">
      <Image
        className="miniBannerIcon"
        source={'./assets/locationPinIcon.png'}
      />
      <Text>
        { location }
      </Text>
    </View>
  );
export default TradiesLocationBanner
