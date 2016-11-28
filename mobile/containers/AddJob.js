import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
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
    flex: 1,
    justifyContent: 'center',
    //This is to offset the blue banner
    marginBottom: height * 0.05,
    alignItems: 'center',
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
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  description: {
    fontWeight: 'bold',
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
      console.log('INSIDE LAT LONG CHANGE!')
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
  render() {
    return (
      <View style={styles.container}>
        <BackButton navigator={this.childMethods().navigator} />
        <View>
          <Text style={{color: '#155fab' }}>New Job</Text>
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
