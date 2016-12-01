import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const filterJobStyles = StyleSheet.create({
  outerBox: {
    height: 7 * vh,
    width: 100 * vw,
    backgroundColor: '#ffffff',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  mapToggle: {
    height: 10 * vh,
    width: 49.8 * vw,
    marginLeft: 0.2 * vw,
  },
  onBg: {
    height: 4 * vh,
    width: 31 * vw,
    backgroundColor: '#2B3647',
    color: '#ffffff',
  },
  offBg: {
    height: 4 * vh,
    width: 31 * vw,
    backgroundColor: '#ffffff',
    borderColor: '#6B6B6B',
    borderWidth: 1,
  },
  leftButton: {
    marginLeft: 19 * vw,
    height: 6 * vh,
  },
  rightButton: {
    marginLeft: 1 * vw,
    height: 6 * vh,
  },
  onText: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 1 * vh,
  },
  offText: {
    textAlign: 'center',
    color: '#6B6B6B',
    paddingTop: 1 * vh,
  },
  buttonText: {
    textAlign: 'center',
  },
  buttonTextWords: {
    textAlign: 'center',
  },
});

export default class MapListToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const showMap = this.props.showMap;
    return (
      <View style={filterJobStyles.outerBox}>
        <TouchableOpacity
          style={[showMap ? filterJobStyles.offBg : filterJobStyles.onBg, filterJobStyles.leftButton]}
          onPress={() => this.props.toggleShowMap(false)}
        >
          <Text style={filterJobStyles.buttonText}>
            <FontAwesome name={'list'} size={15} style={filterJobStyles.buttonTextWords} color={showMap ? '#6B6B6B' : 'white'} />
            <Text style={showMap ? filterJobStyles.offText : filterJobStyles.onText}>  LIST</Text>
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[showMap ? filterJobStyles.onBg : filterJobStyles.offBg, filterJobStyles.rightButton]}
          onPress={() => this.props.toggleShowMap(true)}
        >
          <Text style={filterJobStyles.buttonText}>
            <FontAwesome name={'map-marker'} size={15} style={filterJobStyles.buttonTextWords} color={showMap ? 'white' : '#6B6B6B'} />
            <Text style={showMap ? filterJobStyles.onText : filterJobStyles.offText}> MAP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MapListToggle.propTypes = {
  toggleShowMap: React.PropTypes.func.isRequired,
  showMap: React.PropTypes.bool.isRequired,
};

