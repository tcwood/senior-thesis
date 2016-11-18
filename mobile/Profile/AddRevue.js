import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  background: {
    width: 100 * vh,
    backgroundColor: 'transparent',
  },
  headerRow: {
    width: 100 * vw,
    height: 8 * vh,
    marginTop: 1 * vh,
    marginBottom: 1 * vh,
  }, 
  form: {

  },
  imageIcon: {
    height: 4 * vw,
    width: 4 * vw,
    borderRadius: 4 * vh,
    backgroundColor: 'red',
  },
  imageIconContainter: {
    width: 15 * vw,
    marginLeft: 5 * vw,
    height: 15 * vh
  },
  posterImageIcon: {
    width: 8 * vh,
    height: 8 * vh,
    marginLeft: 27 * vw,
    marginRight: 2 * vw,
    borderRadius: 4 * vh,
    borderColor: 'white',
    borderWidth: 1.5,
  }
});

const whiteImg = require('../assets/whiteTexturedBackground.png');
const profileIcon = 'http://www.solotradie.com/wp-content/uploads/2015/04/tradesman_laptop.jpg'

class AddRevue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Image
        style={ styles.background }
        source={ whiteImg }
      >

      <View style={styles.headerRow}>

        <View style={styles.imageIconContainter}>
          <Image
            style={ styles.posterImageIcon }
            source={{uri: 'http://www.solotradie.com/wp-content/uploads/2015/04/tradesman_laptop.jpg' }}
          />
          <Text>hello</Text>
        </View>
        <View style={styles.headerText}>
        </View>

      </View>

      <View style={styles.form}>
      </View>

      </Image>
    );
  }
}

export default AddRevue;

