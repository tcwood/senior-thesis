import React from 'react';
import fakeJobData from './fakeJobData.js';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import Search from 'react-native-search-bar';
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
  bluePattern: {
    height: 10*vh
  },
  searchBar: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    fontWeight: "100",
    height: 4*vh,
    marginRight: 10*vw,
    marginLeft: 10*vw,
    marginTop: 4*vh,
    width: 80*vw,
    color: 'white',
    paddingLeft:3*vw
  },
  hideSearchIcon: {
    color: '#ffffff'
  }
  ,
  jobTypeBar: {
    height: 7*vh,
    backgroundColor: 'white',
    width: 100*vw
  },
  jobTypeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  },
  searchIcon: {
    paddingTop:0.4*vh
  }
});

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };

  }

  hideSearchIcon(text) {
    var context = this;
    this.setState({searchText: text}, function() {
    });
  }

  render() {
    return(
      <View>

        <Image
          style={jobStyles.bluePattern}
          source={require('../assets/blue-pattern-background.png')}
        >
        <TextInput 
          style={jobStyles.searchBar}
          placeholder='       Search for job'
          placeholderTextColor='white'
          onChangeText={(text) => this.hideSearchIcon(text)}
          value={this.state.searchText}
        >
          {this.state.searchText.length > 0 ? null : <FontAwesome name={'search'} size={20} style={jobStyles.searchIcon} color={'#ffffff'}></FontAwesome>}
        </TextInput>
        </Image>

        <View style={jobStyles.jobTypeBar}>
          <Text style={jobStyles.jobTypeText}> State searchText: {this.state.searchText} </Text>
        </View>



      </View>
    )
  }
}


export default JobList;
