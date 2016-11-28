import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import Router from '../../navigation/Router';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  add: {
    marginTop: 4 * vh,
    marginLeft: 4 * vw,
    marginBottom: 2 * vh,
    marginRight: 2 * vw,
    flexDirection: 'column',
    alignItems: 'center',
  },
});


const AddJobButton = ({ navigator }) => {
  const addJob = () => {
    navigator.push(Router.getRoute('addJob'));
  };
  return (
    <View style={styles.add}>
      <TouchableOpacity onPress={addJob} >
        <FontAwesome
          style={{ backgroundColor: 'transparent' }}
          name={'plus'}
          left={20}
          color={'white'}
          size={30}
        />
        <Text style={{ backgroundColor: 'transparent', color: 'white' }}>Add Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddJobButton;
