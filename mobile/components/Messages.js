import React from 'react';
import {
  Text,
} from 'react-native';

import './UserAgent';

import io from 'socket.io-client/dist/socket.io';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    // Right now, just using local host for testing... switch to dynamic link
    // later
    this.socket = io('http://localhost:3000', { transports: ['websocket'] });
    // can use socket throughout this module by referencing this.socket.io
  }
  render() {
    return (
      <Text> Hello World of Messaging! </Text>
    );
  }
}
export default Messages;

