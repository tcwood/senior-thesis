import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

// Stack overflow has the below import to use socket.io w/ React-native, but
// doesn't seem necessary for the time being
// import './UserAgent';

import io from 'socket.io-client/dist/socket.io';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height - 64,
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  sendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    width,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputText: {
    width: width * 0.7,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
  },
});
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    // Right now, just using local host for testing... switch to ${settings.SERVER}/
    this.handleSubmit = this.handleSubmit.bind(this);
    this.socket = io('http://localhost:3000', { transports: ['websocket'] });
    // can use socket throughout this module by referencing this.socket.io
  }

  handleSubmit() {
    // this.socket.emit('message', this.state.message);
    this.props.newMessage({
      ChatId: this.props.chatId,
      text: this.state.message,
      UserId: this.props.profile.id,
    });

    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Hello World of Messaging!!! </Text>
        {this.props.messageList &&
          this.props.messageList.map((msg, i) => {
            return (
              <View key={i}>
                <Text> {msg.text} </Text>
              </View>
            );
          })
        }
        <View style={styles.sendRow}>
          <TextInput
            style={styles.inputText}
            onChangeText={(message) => {
              this.setState({ message });
            }}
            value={this.state.message}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <FontAwesome
              name={'paper-plane-o'}
              size={25}
              color={'#434343'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Messages.propTypes = {
  newMessage: React.PropTypes.func.isRequired,
  profile: React.PropTypes.object.isRequired,
  messageList: React.PropTypes.array,
};

export default Messages;

