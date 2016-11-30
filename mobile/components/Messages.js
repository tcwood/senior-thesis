import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

// Stack overflow has the below import to use socket.io w/ React-native, but
// doesn't seem necessary for the time being
// import './UserAgent';

import io from 'socket.io-client/dist/socket.io';
import styles from '../styles/Messages';

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
    console.log('chatId from Messages handleSubmit', this.props.chatId);


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
    console.log('peer from messages', this.props.peer);
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
                <View style={styles.messageRow}>
                  {!ownMsg &&
                    <Image
                      style={styles.peerMsgImage}
                      source={{ uri: this.props.peer.profilePicUrl }}
                    />
                  }
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
  newMessage: React.PropTypes.func,
  profile: React.PropTypes.object.isRequired,
  messageList: React.PropTypes.array,
  chatId: React.PropTypes.number,
  peer: React.PropTypes.object,
};

export default Messages;

