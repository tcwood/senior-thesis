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
import JobTypeFilter from './jobTypeFilter'
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
  outerBox: {
    height: 10*vh,
    width: 100*vw,
    backgroundColor: '#ffffff',
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  listToggle: {
    height: 10*vh,
    width: 49.8*vw,
    marginRight:0.2*vw,
    backgroundColor: '#e9e9e9',
  },
  mapToggle: {
    height: 10*vh,
    width: 49.8*vw,
    marginLeft:0.2*vw,
    backgroundColor: '#e9e9e9',
  },
  buttonText: {
    textAlign: 'center',
    marginTop:4*vh
  },
  buttonTextWords: {
    textAlign: 'center',
    marginTop:4*vh,
    paddingLeft: 10*vw,
    marginLeft: 10*vw,
  },
  buttonTextWordsBold: {
    textAlign: 'center',
    marginTop:4*vh,
    paddingLeft: 10*vw,
    marginLeft: 10*vw,
    fontWeight: '600'
  },
  chevron: {
    padding: 5,
  }
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
        <View style={jobStyles.outerBox}>
          <View style={jobStyles.listToggle}>
            <Text style={jobStyles.buttonText}>
              <FontAwesome name={'list'} size={15} style={jobStyles.chevron, jobStyles.buttonTextWords} color={'black'}></FontAwesome>
              <Text style={jobStyles.buttonTextWordsBold}>  LIST</Text>
            </Text>
          </View>
          <View style={jobStyles.mapToggle}>
            <Text style={jobStyles.buttonText}>  
              <FontAwesome name={'map-marker'} size={15} style={jobStyles.chevron, jobStyles.buttonTextWords} color={'gray'}></FontAwesome>
              <Text style={jobStyles.buttonTextWords}> MAP</Text>
            </Text>
          </View>
        </View>

      </View>
    )
  }
}

export default JobList;