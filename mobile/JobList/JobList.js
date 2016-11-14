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
  bluePanel: {
    height: 30*vh,
    width: 100*vw
  },
  bluePanelHeading: {
    marginTop: 5*vh,
    color: 'white',
    fontWeight:"200",
    textAlign: 'center',
    fontSize: 19,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  leftIcon: {
    marginLeft:17.5*vw,
    width: 20*vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  middleIcon: {
    width: 25*vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  rightIcon: {
    width: 25*vw,
    marginLeft: 4*vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  iconSection: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    marginTop:3*vh,
    width: 100*vw
  },
  iconText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12
  },
  posterImageIcon: {
    width: 8*vh,
    height: 8*vh,
    marginLeft:27*vw,
    marginRight: 2*vw,
    borderRadius: 4*vh
  },
  posterNameText: {
    color: 'white',
    fontWeight: '200',
    marginTop:2.5*vh
  },
  jobPoster: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    width: 100*vh,
    marginTop: 4*vh
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
        <MapListToggle/>

        <Image
          style={jobStyles.bluePanel}
          source={require('../assets/blue-pattern-background.png')}
        >
          <Text style={jobStyles.bluePanelHeading}>
            Shower Remodel
          </Text>

          <View style={jobStyles.iconSection}>
            <View style={jobStyles.leftIcon}>
              <FontAwesome name={'users'} size={15} style={jobStyles.iconFormat} color={'white'}>
                <Text style={jobStyles.iconText}>  3 hires</Text>
              </FontAwesome>
            </View>
            <View style={jobStyles.middleIcon}>
              <FontAwesome name={'map-marker'} size={15} style={jobStyles.iconFormat} color={'white'}>
                <Text style={jobStyles.iconText}>  San Francisco</Text>
              </FontAwesome>
            </View>
            <View style={jobStyles.rightIcon}>
              <FontAwesome name={'money'} size={15} style={jobStyles.iconFormat} color={'white'}>
                <Text style={jobStyles.iconText}>   $32 /hour</Text>
              </FontAwesome>
            </View>
          </View>

          <View style={jobStyles.jobPoster}>
              <Image
                style={jobStyles.posterImageIcon}
                source={{uri: 'http://www.q4.co.uk/images/business-tradesmen.png'}}
              />
              <Text style={jobStyles.posterNameText}> John Anderson </Text>
          </View>


        </Image>

      </View>
    )
  }
}

export default JobList;