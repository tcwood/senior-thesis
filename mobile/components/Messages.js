import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

// Stack overflow has the below import to use socket.io w/ React-native, but
// doesn't seem necessary for the time being
// import './UserAgent';

import io from 'socket.io-client/dist/socket.io';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  messageBox: {
    alignSelf: 'flex-end',
    height: 40,
    width,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    // Right now, just using local host for testing... switch to dynamic link
    // later
    this.socket = io('http://localhost:3000', { transports: ['websocket'] });
    // can use socket throughout this module by referencing this.socket.io
  }

  handleSubmit() {
    this.socket.emit('message', this.state.message);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Hello World of Messaging! </Text>
        <TextInput
          style={styles.messageBox}
          onChangeText={message => this.setState({
            message,
          })}
          defaultValue={'test'}
        />
      </View>
    );
  }
}
export default Messages;

