import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Router from '../Router'


const styles = StyleSheet.create({
  addRevueText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 20,
  },
});

const addRevueHandler = (navigator) => {
  navigator.push(Router.getRoute('addRevue'))
}

const AddRevueIcon = ({isPeer, navigator}) => {
  // console.log('props.navigator in Icon first: ', props.navigator)
  // console.log('props in Icon second: ' )
  if (isPeer) {
    return (
      <Text style={styles.addRevueIcon} onPress={function(){addRevueHandler(navigator)}}>
        <FontAwesome
          name="plus-circle"
          size={18}
          color="red"
        />
          <Text style={styles.addRevueText}> Add Revue </Text>
      </Text>
    );
  }
  return (
    <Text></Text>
  );
};

export default AddRevueIcon;