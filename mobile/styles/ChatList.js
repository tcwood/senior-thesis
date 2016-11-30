import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
  },
  bluePattern: {
    height: 0.1 * height,
    width,
  },
  row: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 30,
  },
  circularImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default styles;
