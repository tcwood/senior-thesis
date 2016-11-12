import React from 'react';
import {
  View,
} from 'react-native';
import TradiesExpertiseBanner from './bannerIcons/TradiesExpertiseBanner';
import TradiesLocationBanner from './bannerIcons/TradiesLocationBanner';
import TradiesReviewsBanner from './bannerIcons/TradiesReviewsBanner';

const TradieBanner = ({ expertise, location, reviews }) =>
  (
    <View className="tradieBanner"> 
      <TradiesExpertiseBanner expertise={expertise} />
      <TradiesLocationBanner location={location} />
      <TradiesReviewsBanner reviews={reviews} />
    </View>
  );
export default TradieBanner;
