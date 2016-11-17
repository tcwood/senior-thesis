import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
});

class AddRevue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ width }}>
        <Text> Add Revue Page </Text>
      </View>
    );
  }
}

export default AddRevue;

