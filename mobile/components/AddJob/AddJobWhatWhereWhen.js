import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';
import AutoCompleteLocation from './AutoCompleteLocation';

const { width, height } = Dimensions.get('window');
const condenseAddress = (address) => {
  let counter = 0;
  let result;
  address.split('').forEach( (character, index) => {
    if (character === ',') {
      counter += 1;
    }
    if (counter === 2 && character === ',') {
      result = index;
    }
  });
  return address.split('').slice(0, result).join('');
};



const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (jobType, placeHolder) => {
    return (
      <View style={[styles.inputBox, styles.marginBelow]}>
        <TextInput
          id={jobType}
          style={[styles.input, {height: 20}]}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.addJobDetail(jobType, text)}
        />
      </View>
    );
  };

  return (

    <View style={styles.container} >
      {userInput('title', 'Enter title of job')}
      <View style={styles.autoCompleteBox}>
        <AutoCompleteLocation methods={methods} />
      </View>
      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene('addTimeFrame', { styles, methods, time: 'from' })}>
          <Text style={{ color: 'white' }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
