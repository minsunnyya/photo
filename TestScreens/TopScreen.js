/* Test Code */
// import React from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';

// const TopScreen = ({switchToMainScreen, switchToBottomScreen}) => {
//   return (
//     <View style={styles.container}>
//       <Text>Top Screen</Text>
//       <Button title="Switch to Main Screen" onPress={switchToMainScreen} />
//       <Button title="Switch to Bottom Screen" onPress={switchToBottomScreen} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default TopScreen;

import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import ColorPanel from 'react-native-color-panel';

const TopScreen = ({switchToMainScreen}) => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      {/* 위쪽 영역 - 상의 */}
      <TouchableOpacity
        onPress={switchToMainScreen}
        style={styles.topContainer}>
        <Image
          source={require('../TestImage/top-image.jpg')}
          style={styles.topImage}
        />
      </TouchableOpacity>

      {/* 아래쪽 영역 - Color Select */}
      <View style={styles.colorSelectContainer}>
        <Text style={styles.colorSelectText}>Select Color:</Text>
        <ColorPanel
          style={{flex: 1}}
          color={selectedColor}
          onChange={handleColorChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  colorSelectContainer: {
    flex: 1,
    padding: 20,
  },
  colorSelectText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TopScreen;
