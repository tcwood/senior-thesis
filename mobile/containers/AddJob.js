import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import Router from '../navigation/Router';
import colors from '../constants/Colors';
import Actions from '../actions/index';
import AddJobWhatWhereWhen from '../components/AddJob/AddJobWhatWhereWhen';
import BackButton from '../reusableComponents/BackButton';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: height * 0.05,
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  hardHat: {
    width: width * 0.05,
    height: height * 0.05,
    flex: 1,
  },
  bttn: {
    width: width * 0.7,
    height: width * 0.14,
    margin: width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    borderRadius: 3,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderColor: colors.secondary,
  },
  marginBelow: {
    marginBottom: height * 0.1,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  description: {
    fontWeight: 'bold',
  },
  input: {
    textAlign: 'center',
    height: 20,
    width: width * 0.7,
    marginTop: height * 0.0,
  },
  tallInput: {
    textAlign: 'center',
    height: 60,
    width: width * 0.7,
  },
  newJob: {
    color: '#155fab',
    fontSize: 35,
    fontWeight: '300',
    marginTop: height * 0.0,
    marginLeft: width * 0.04,
  },
  autoCompleteBox: {
    height: height * 0.15,
  }
});

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newJob: {},
    };
    this.nextScene = this.nextScene.bind(this);
    this.childMethods = this.childMethods.bind(this);
    this.addJobDetail = this.addJobDetail.bind(this);
    this.dispatchJobDetails = this.dispatchJobDetails.bind(this);
  }

  nextScene(view, paramObj) {
    this.props.navigator.push(Router.getRoute(view, paramObj));
  }
  addJobDetail(jobType, text, lat, lng) {
    const newJob = this.state.newJob;
    newJob[jobType] = text;
    if (lat && lng) {
      newJob.lat = lat;
      newJob.lng = lng;
    }
    const context = this;
    this.setState({ newJob }, function() {
    });
  }
  dispatchJobDetails() {
    this.props.addJob(this.state.newJob);
  }

  childMethods() {
    return {
      dispatchJobDetails: this.dispatchJobDetails,
      addJobDetail: this.addJobDetail,
      nextScene: this.nextScene,
      navigator: this.props.navigator,
    };
  }

  // <Image source={require('../assets/hardhat.jpg')} style={styles.hardHat} />

  render() {
    return (
      <View style={styles.container}>
        <BackButton navigator={this.childMethods().navigator} />
        <View style={{marginBottom: 90, marginTop: 90, flexDirection: 'row' }}>
          <Image source={require('../assets/hardhat.jpg')} style={{width: 35, height: 35}} />
          <Text style={[styles.newJob ]}>New Job</Text>
        </View>
        <AddJobWhatWhereWhen methods={this.childMethods()} styles={styles} />
      </View>
    );
  }
}

AddJob.propTypes = {
  navigator: React.PropTypes.object,
  addJob: React.PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addJob: jobDetails => dispatch(Actions.newJob(jobDetails)),
});

const AddJobConnected = connect(null, mapDispatchToProps)(AddJob);

export default AddJobConnected;
