import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';

const AddJobWhatWhereWhen = ({ route }) => {
  const styles = route.params.styles;
  const methods = route.params.methods;
  const userInput = (type, placeHolder, multiline, style, focus) =>
    (
      <View style={[styles.inputBox, { height: 30, marginTop: 50}]}>
        <TextInput
          id={type}
          style={[styles.input, style]}
          autoFocus={focus}
          placeholder={placeHolder}
          multiline={multiline}
          numberOfLine={2}
          onChangeText={text => methods.addJobDetail(type, text)}
        />
      </View>
    );
  return (
    <View style={styles.container}>
      <BackButton navigator={methods.navigator} />
      <View style={{marginBottom: 10, marginTop: 90, flexDirection: 'row' }}>
        <Image source={require('../../assets/hardhat.jpg')} style={{width: 35, height: 35}} />
        <Text style={{color: '#155fab', fontSize: 35, fontWeight: '300', marginLeft: 20}}>New Job</Text>
      </View>
      {userInput('profession', 'What skills are needed?', null, null)}
      {userInput('hires', 'How many people?')}
      {userInput('pay', 'What will the pay be?')}
      {userInput('description', 'Describe the job.', true, styles.tallInput)}
      <TextInput 
        onChangeText={text => this.updateTextState(text)}
        multiline={true}
        placeholder={'Give a short description of the job...'}
      />

      <View style={{marginTop: 30 }}>
        <TouchableOpacity
          style={styles.bttn}
          onPress={() => {
            methods.dispatchJobDetails();
            methods.nextScene('jobList', { styles, methods });
          }}
        >
          <Text style={{ color: 'white'}}> SUBMIT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
