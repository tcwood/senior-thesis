import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';

const Dimensions = React.Dimensions || require('Dimensions')
const {width, height} = Dimensions.get('window');
const vh = height/100;
const vw = width/100;

const blueTile = StyleSheet.create({
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

export default class BlueJobTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <Image
        style={blueTile.bluePanel}
        source={require('../assets/blue-pattern-background.png')}
      >
        <Text style={blueTile.bluePanelHeading}>
          Shower Remodel
        </Text>

        <View style={blueTile.iconSection}>
          <View style={blueTile.leftIcon}>
            <FontAwesome name={'users'} size={15} style={blueTile.iconFormat} color={'white'}>
              <Text style={blueTile.iconText}>  3 hires</Text>
            </FontAwesome>
          </View>
          <View style={blueTile.middleIcon}>
            <FontAwesome name={'map-marker'} size={15} style={blueTile.iconFormat} color={'white'}>
              <Text style={blueTile.iconText}>  San Francisco</Text>
            </FontAwesome>
          </View>
          <View style={blueTile.rightIcon}>
            <FontAwesome name={'money'} size={15} style={blueTile.iconFormat} color={'white'}>
              <Text style={blueTile.iconText}>   $32 /hour</Text>
            </FontAwesome>
          </View>
        </View>

        <View style={blueTile.jobPoster}>
            <Image
              style={blueTile.posterImageIcon}
              source={{uri: 'http://www.q4.co.uk/images/business-tradesmen.png'}}
            />
            <Text style={blueTile.posterNameText}> John Anderson </Text>
        </View>
      </Image>
    )
  }
}