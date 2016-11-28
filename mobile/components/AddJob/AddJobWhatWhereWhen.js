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
<<<<<<< HEAD
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
=======
import AutoCompleteLocation from './AutoCompleteLocation'

>>>>>>> pulled AutoCompleteLocationForm out into its own component to minimise merge conflicts later

const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (jobType, placeHolder) => {
    return (
      <View style={styles.inputBox}>
        <TextInput
          id={jobType}
          style={styles.input}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.addJobDetail(jobType, text)}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, {marginTop: height * 0.3}]} >
      {userInput('title', 'What is the Project?')}
      <AutoCompleteLocation methods={methods} />
      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene('addTimeFrame', { styles, methods, time: 'from' })}>
          <Text style={{ color: colors.primary }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
