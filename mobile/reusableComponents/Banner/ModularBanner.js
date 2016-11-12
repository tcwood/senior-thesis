import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import ModularBannerIcon from './ModularBannerIcon';
import styles from '../../workerListStyles';

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  tripleBanner: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginLeft: 35,
    marginTop: 5,
  },
});

const ModularBanner = ({ iconArr, propertyArr, name }) => {
  const bannerArr = new Array(iconArr.length);
  const banner = bannerArr.map((element, i) =>
    return (
      <ModularBannerIcon 
        Icon={Icon(iconArr[i])}
        text={propertyArr[i]}
      />
    ))
  return (
    <View style={styles.banner}> 
      <Text style={styles.name}>{name}</Text>
      <View style={styles.tripleBanner}>
        { banner() }
      </View>
    </View>
  );
}
export default ModularBanner;
