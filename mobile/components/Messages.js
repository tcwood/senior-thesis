import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
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
    justifyContent: 'space-between',
  },
  contentContainer: {
    justifyContent: 'flex-start',
  },
  sendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputText: {
    width: width * 0.7,
    height: 30,
    borderColor: '#092a4c',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 4,
    marginTop: 3,
    fontSize: 14,
  },
  ownMessage: {
    color: '#eff3f9',
    fontSize: 14,
  },
  peerMessage: {
    color: '#092a4c',
    fontSize: 14,
  },
  message: {
    width: 0.85 * width,
    marginTop: 10,
    padding: 3,
    borderRadius: 10,
  },
  ownContainer: {
    backgroundColor: '#092a4c',
    alignSelf: 'flex-start',
  },
  peerContainer: {
    backgroundColor: '#eff3f9',
    alignSelf: 'flex-end',
  },
});
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.chatId = this.props.chatId;
    this.ownId = this.props.profile.id;

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
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {this.props.messageList &&
            this.props.messageList.map((msg, i) => {
              const ownMsg = msg.UserId === this.ownId;
              return (
                <View
                  key={i}
                  style={[
                    (ownMsg ? styles.ownContainer : styles.peerContainer),
                    styles.message,
                  ]}
                >
                  <Text style={ownMsg ? styles.ownMessage : styles.peerMessage}>
                    {msg.text}
                  </Text>
                </View>
              );
            })
          }
        </ScrollView>
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
  chatId: React.PropTypes.number,
};

export default Messages;

