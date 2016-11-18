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
    width: 100 * vw,
    height: 100 * vh,
    backgroundColor: 'transparent',
  },
  headerRow: {
    width: 100 * vw,
    height: 14 * vh,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  }, 
  headerText: {
    width: 70 * vw,
    height: 20 * vh,
  }, 
  imageIconContainter: {
    width: 30 * vw,
    height: 20 * vh,
  },
  formBox: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderColor: '#155FAB',
    borderWidth: 1,
    borderRadius: 5,
    height: 60 * vh,
    marginTop: 5 * vh,
  },
  submitButton: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderColor: '#155FAB',
    borderWidth: 1,
    borderRadius: 5,
    height: 7 * vh,
    marginTop: 2 * vh,
  },
  imageIcon: {
    height: 4 * vw,
    width: 4 * vw,
    borderRadius: 4 * vh,
    borderColor: 'white',
  },
  posterImageIcon: {
    width: 11 * vh,
    height: 11 * vh,
    marginLeft: 8 * vw,
    marginRight: 2 * vw,
    marginTop: 6 * vh,
    borderRadius: 5.5 * vh,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  recomendationHead: {
    fontSize: 23,
    fontWeight: '200',
    color: '#616060',
    marginTop: 9 * vh,
    marginLeft: 3 * vw,
  },
  submitText: {
    fontSize: 19,
    fontWeight: '200',
    color: '#155FAB',
    textAlign: 'center',
    marginTop: 1.5 * vh,
  },
  formText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 3 * vw,
    marginRight: 3 * vw,
    marginTop: 3 * vw,   
    lineHeight: 30,
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
          </View>
          <View style={styles.headerText}>
            <Text style={styles.recomendationHead}>Write a recomendation</Text>
          </View>
        </View>

        <View style={styles.formBox}>
          <Text style={styles.formText}>
           This is a sentence. Hopefully it goes across two lines. Bob is a great carpenter. I worked with him in Nam.
          </Text>
        </View>

        <View style={styles.submitButton}>
          <Text style={styles.submitText}> SUBMIT </Text>
        </View>
      </Image>
    );
  }
}

export default AddRevue;

