import React from 'react';
import {
  View,
} from 'react-native';

import RowEntry from './RowEntry';

const RowList = (setOfTradies) =>
  setOfTradies.map((tradie, i) =>
    (
      <RowEntry
        key={i}
        name={tradie.name}
        expertise={tradie.expertise}
        location={tradie.location}
        reviews={tradie.reviews}
      />
    ),
  );
export default RowList;

    const rowList = RowList([
      { name: 'Kanye West', location: 'San Bernardino', expertise: 'Plumba', reviews: '9' },
      { name: 'Kanye West', location: 'San Bernardino', expertise: 'Plumba', reviews: '9' }]);