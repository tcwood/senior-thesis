import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import colors from '../../constants/Colors';
import { StyleSheet, Dimensions } from 'react-native';
// condenseAddress cuts off the address after the second comma
// hiding the state & country.

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: 'transparent',
    height: 28,
    width: width * 0.7,
    borderTopColor: 'transparent',
    borderBottomColor: colors.secondary,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    paddingBottom: height * 0.05,
  },
  textInput: {
    borderBottomWidth: 1,
    marginTop: height * 0.01,
    borderColor: colors.secondary,
    backgroundColor: 'transparent',
    height: 30,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 15,
    textAlign: 'center',
  },
  listView: {
    width: width * 0.7,
  },
});
const condenseAddress = (address) => {
  let counter = 0;
  let result;
  address.split('').forEach((character, index) => {
    if (character === ',') {
      counter += 1;
    }
    if (counter === 2 && character === ',') {
      result = index;
    }
  });
  return address.split('').slice(0, result).join('');
};

const AutoCompleteLocation = ({methods}) => {
  const addJobDetail = methods.addJobDetail;
  return (
    <GooglePlacesAutocomplete
      styles={styles}
      placeholder="Where?"
      id="location"
      minLength={1}
      autoFocus={false}
      listViewDisplayed="auto"
      fetchDetails
      onPress={(data) => {
        const address = condenseAddress(data.description);
        Geocoder.setApiKey('AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q');
        Geocoder.getFromLocation(address).then(
          (json) => {
            const location = json.results[0].geometry.location;
            addJobDetail('location', address, location.lat, location.lng);
          },
          (error) => {
            console.log(error);
          },
        );
      }}
      query={{
        key: 'AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q',
        language: 'en',
        types: 'geocode',
      }}
      currentLocation={false}
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch"
      enablePoweredByContainer={false}
    />
  );
};

AutoCompleteLocation.propTypes = {
  methods: React.PropTypes.object.isRequired,
};

export default AutoCompleteLocation;
