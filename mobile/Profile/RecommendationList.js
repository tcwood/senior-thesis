import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Recommendation from './Recommendation';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  recommendations: {
    width: 0.9 * width,
    marginTop: 20,
  },
  recTitle: {
    fontSize: 20,
  },
})

// Eventually will get recommendations passed in through props and map
// over the info to create each individual recommendation
const RecommendationList = () => (
  <View style={styles.recommendations}>
    <Text style={styles.recTitle}>
      Recommendations
      <View style={{width: 25, height: 25, justifyContent: 'flex-end'}} >
        <TouchableHighlight>
          <FontAwesome
            name="pencil-square-o"
            size={40}
            color={'#DCDCDC'}
          />
        </TouchableHighlight>
      </View>
    </Text>
    <Recommendation />
    <Recommendation />
    <Recommendation />
    <Recommendation />
  </View>
)

export default RecommendationList;
