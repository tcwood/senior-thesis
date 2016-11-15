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
import BlueJobTile from './BlueJobTile.js'
import WhiteJobTile from './WhiteJobTile.js'


const Tile = StyleSheet.create({
});

export default class JobTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: props.job,
    };
  }
  render() {
    function isEven(n) {
       return n % 2 == 0;
    }
    if (isEven(this.props.job.id)) {
      return(
        <BlueJobTile job={this.props.job}/>
      )
    } else {
      return(
        <WhiteJobTile job={this.props.job}/>
      )
    }
  }
}