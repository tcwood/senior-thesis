import React from 'react';
import {
  View,
} from 'react-native';
import TradiesExpertiseBanner from './bannerIcons/TradiesExpertiseBanner';
import TradiesLocationBanner from './bannerIcons/TradiesLocationBanner';
import TradiesReviewsBanner from './bannerIcons/TradiesReviewsBanner';

const TradieBanner = () =>
  (
    <View className="tradieBanner"> 
      <TradiesExpertiseBanner expertise={'Plumber'} />
      <TradiesLocationBanner location={'San Bernadina'} />
      <TradiesReviewsBanner numReviews={'9'} />
    </View>
  );
export default TradieBanner;
