import React from 'react';
import fakeJobData from './fakeJobData.js';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import SearchBar from './searchBar.js';
import JobTypeFilter from './jobTypeFilter.js'
import MapListToggle from './mapListToggle.js'
import BlueJobTile from './BlueJobTile.js'
import {
  FontAwesome,
} from '@exponent/vector-icons';


// Get 'vh' for stylesheet. 1*vh represents 1% of the height of the viewport
const Dimensions = React.Dimensions || require('Dimensions')
const {width, height} = Dimensions.get('window');
const vh = height/100;
const vw = width/100;

// create stylesheet object
const jobStyles = StyleSheet.create({

});

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <View>
        <SearchBar/>
        <JobTypeFilter/>
        <MapListToggle/>
        <BlueJobTile/>
      </View>
    )
  }
}

export default JobList;