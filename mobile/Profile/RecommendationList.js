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
import AddRevueIcon from './AddRevueIcon'

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
const RecommendationList = ({isPeer, navigator, name}) => {
  return (
    <View style={styles.recommendations}>
      <Text style={styles.recTitle}>
        Recommendations
        <View style={{width: 25, height: 25, justifyContent: 'flex-end'}} >
        </View>
        <AddRevueIcon isPeer={isPeer} navigator={navigator} name={name}/>
      </Text>
      <Recommendation />
      <Recommendation />
      <Recommendation />
      <Recommendation />
    </View>
  )
}

export default RecommendationList;
