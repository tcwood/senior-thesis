import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

const ModularBannerIcon = ({ text, Icon }) =>
  (
    <View className="modularBanner">
      <Text>
      { Icon }{' ' + text }
      </Text>
    </View>
  );
export default ModularBannerIcon;
