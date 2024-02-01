import React from 'react';
import Postcode from '@actbase/react-daum-postcode';
import {View, Dimensions} from 'react-native';

const AddressSearch = () => {
  const handleComplete = data => {
    alert(JSON.stringify(data));
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Postcode
        style={{width: '100%', height: Dimensions.get('window').height}}
        jsOptions={{animated: true}}
        onSelected={handleComplete}
      />
    </View>
  );
};

export default AddressSearch;
