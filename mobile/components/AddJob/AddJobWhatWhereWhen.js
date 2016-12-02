import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AutoCompleteLocation from './AutoCompleteLocation';


const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (jobType, placeHolder) => {
    return (
      <View style={[styles.inputBox, styles.marginBelow]}>
        <TextInput
          id={jobType}
          style={[styles.input, { height: 20 }]}
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
