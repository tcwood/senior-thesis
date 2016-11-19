import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Router from '../../navigation/Router.js';
import colors from '../../constants/Colors';
import AddJobWhatWhereWhen from './AddJobWhatWhereWhen';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05, //This is to offset the blue banner
  },

  bttn: {
    width: width * 0.33,
    height: 30,
    margin: width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: width * 0.33 * 0.02,
  },

  inputBox: {
    borderBottomWidth: 1,
    marginBottom: width * 0.01,
    marginTop: height * 0.01,
    borderColor: colors.secondary,
  },

  input: {
    textAlign: 'center',
    height: 30,
    width: width * 0.7,
  },
  tallInput: {
    textAlign: 'center',
    height: 60,
    width: width * 0.7,
  },
});
const dispatch = a => a;

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.nextScene = this.nextScene.bind(this);
    this.childMethods = this.childMethods.bind(this);
  }

  nextScene(view, paramObj) {
    this.props.navigator.push(Router.getRoute(view, paramObj));
  }

  childMethods() {
    return {
      dispatch,
      addEntry: (text, type) => { return { text, type } },
      nextScene: this.nextScene,
      navigator: this.props.navigator,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AddJobWhatWhereWhen methods={this.childMethods()} styles={styles} />
      </View>
    );
  }
}

AddJob.propTypes = {
  grantAccess: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  which: React.PropTypes.string.isRequired,
  nameText: React.PropTypes.string,
  profession: React.PropTypes.string,
  years: React.PropTypes.string,
  location: React.PropTypes.string,
  contact: React.PropTypes.string,
  // Don't have to pass around experienceText because it's the last one
};

export default AddJob;
