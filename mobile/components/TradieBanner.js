import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import styles from '../styles/WorkerList';

const TradieBanner = ({ profession, location, rating }) =>
  (
    <View style={styles.iconSection}>
      <View style={styles.leftIcon}>
        <FontAwesome name={'wrench'} size={15} style={styles.iconFormat} color={'gray'}>
          <Text style={styles.iconText}> {profession}</Text>
        </FontAwesome>
      </View>
      <View style={styles.middleIcon}>
        <FontAwesome name={'location-arrow'} size={15} style={styles.iconFormat} color={'gray'}>
          <Text style={styles.middleText}> {location}</Text>
        </FontAwesome>
      </View>
      <View style={styles.rightIcon}>
        <FontAwesome name={'star-o'} size={15} style={styles.iconFormat} color={'gray'}>
          <Text style={styles.iconText}> {rating}</Text>
        </FontAwesome>
      </View>
    </View>
  );

TradieBanner.propTypes = {
  profession: React.PropTypes.string,
  location: React.PropTypes.string,
  rating: React.PropTypes.number,
};

export default TradieBanner;
