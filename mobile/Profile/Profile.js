import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  profPic: {
    borderRadius: width * 0.5 * 0.5,
    width: width * 0.5,
    height: width * 0.5,
    marginTop: 0.05 * height,
  },
  name: {

  },
  experience: {

  },
  contact: {

  },
});
// Picture
// Name
// three component thingy... (type of worker, location, experience)
// Information / Experience
// Contact Info
// Eventually can edit
// Recommendations

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fake: 'stuff',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/bluePatternBackground.png')}
        >
          <Image
            style={styles.profPic}
            source={require('./timallen.jpg')}
          />
        </Image>
        <Text style={styles.name}> Tim the Toolman </Text>
        <Text style={styles.experience}>
          This is all of my experience. I've got lots of experience. Hire me because of me and this and that and boom.
        </Text>
        <Text style={styles.contact}>
          (234)567-8910
        </Text>
      </View>
    );
  }
}

export default Profile;
