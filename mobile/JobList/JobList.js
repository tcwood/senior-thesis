import React from 'react';
import fakeJobData from './fakeJobData.js';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Search from 'react-native-search-bar';

/* Rectangle 3: */



// Get 'vh' for stylesheet. 1*vh represents 1% of the height of the viewport
const Dimensions = React.Dimensions || require('Dimensions')
const {width, height} = Dimensions.get('window');
const vh = height/100;


// create stylesheet object
const jobStyles = StyleSheet.create({
  bluePattern: {
    height: 10*vh
  },
  searchBar: {
    'backgroundColor': '#ffffff',
    'borderRadius': 8,

  }
});

// create JobList component
const JobList = () => (
  <View >
    <View style={jobStyles.container}>
      <Image
        style={jobStyles.bluePattern}
        source={require('../assets/blue-pattern-background.png')}
      >
        <Search
            ref='searchBar'
            style={jobStyles.searchBar}
            placeholder='Search projects'
            />
      </Image>

      <Text> {fakeJobData[0].title} </Text>
    </View>
  </View>
);

export default JobList;
