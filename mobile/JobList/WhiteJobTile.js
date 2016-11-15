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

const whiteTile = StyleSheet.create({
  bluePanel: {
    height: 30*vh,
    width: 100*vw
  },
  bluePanelHeading: {
    marginTop: 5*vh,
    color: 'black',
    fontWeight:"400",
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
    color: '#797979',
    textAlign: 'center',
    fontSize: 12
  },
  posterImageIcon: {
    width: 8*vh,
    height: 8*vh,
    marginLeft:27*vw,
    marginRight: 2*vw,
    borderRadius: 4*vh,
    borderColor: '#efefef',
    borderWidth: 1
  },
  posterNameText: {
    color: 'black',
    fontWeight: '400',
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

export default class WhiteJobTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return(
      <Image
        style={whiteTile.bluePanel}
        source={require('../assets/whiteTexturedBackground.png')}
      >
        <Text style={whiteTile.bluePanelHeading}>
          Shower Remodel
        </Text>

        <View style={whiteTile.iconSection}>
          <View style={whiteTile.leftIcon}>
            <FontAwesome name={'users'} size={15} style={whiteTile.iconFormat} color={'#797979'}>
              <Text style={whiteTile.iconText}>  3 hires</Text>
            </FontAwesome>
          </View>
          <View style={whiteTile.middleIcon}>
            <FontAwesome name={'map-marker'} size={15} style={whiteTile.iconFormat} color={'#797979'}>
              <Text style={whiteTile.iconText}>  San Francisco</Text>
            </FontAwesome>
          </View>
          <View style={whiteTile.rightIcon}>
            <FontAwesome name={'money'} size={15} style={whiteTile.iconFormat} color={'#797979'}>
              <Text style={whiteTile.iconText}>   $32 /hour</Text>
            </FontAwesome>
          </View>
        </View>

        <View style={whiteTile.jobPoster}>
            <Image
              style={whiteTile.posterImageIcon}
              source={{uri: 'http://www.q4.co.uk/images/business-tradesmen.png'}}
            />
            <Text style={whiteTile.posterNameText}> John Anderson </Text>
        </View>
      </Image>
    )
  }
}