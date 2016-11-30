import {
  StyleSheet,
  Dimensions,
} from 'react-native';

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
    marginLeft: 5,
  },
  peerContainer: {
    backgroundColor: '#eff3f9',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  peerMsgImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
