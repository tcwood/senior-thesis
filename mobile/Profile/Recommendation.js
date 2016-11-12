import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const profPic = require('./plumber.png');

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardLeft: {
    flex: 1,
  },
  profPic: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2 * 0.5,
  },
  cardRight: {
    flexDirection: 'column',
    flex: 3,
  },
  name: {
    fontSize: 16,
  },
  recText: {
    fontSize: 12,
    padding: 5,
  },
});

export default () => (
  <View style={styles.card}>
    <View style={styles.cardLeft}>
      <Image
        style={styles.profPic}
        source={profPic}
      />
    </View>
    <View style={styles.cardRight}>
      <View>
        <Text style={styles.name}>
          Plumbmaster3000
        </Text>
        <Text style={styles.recText}>
          This dude is the best. Like seriously, man, the best.
          You should totally hire him for all of the jobs. ALL OF THEM!!
          NOW!! Why are you still waiting? Do it!
        </Text>
      </View>
    </View>
  </View>
);
