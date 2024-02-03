// import React from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';

// const BottomScreen = ({switchToMainScreen, switchToTopScreen}) => {
//   return (
//     <View style={styles.container}>
//       <Text>Bottom Screen</Text>
//       <Button title="Switch to Main Screen" onPress={switchToMainScreen} />
//       <Button title="Switch to Top Screen" onPress={switchToTopScreen} />
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

// export default BottomScreen;

// BottomScreen.js
import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import ColorPanel from 'react-native-color-panel';

const BottomScreen = ({switchToMainScreen}) => {
  const [selectedColor, setSelectedColor] = useState('#ffffff');

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      {/* 위쪽 영역 - 상의 */}
      <TouchableOpacity
        onPress={switchToMainScreen}
        style={styles.bottomContainer}>
        <Image
          source={require('../TestImage/bottom-image.jpg')}
          style={styles.bottomImage}
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
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImage: {
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

export default BottomScreen;

// BottomScreen.js

// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {ColorMatrixImageFilters} from 'react-native-color-matrix-image-filters';

// const BottomScreen = ({switchToTopScreen}) => {
//   const [selectedColor, setSelectedColor] = useState('#ffffff');
//   const [filteredColor, setFilteredColor] = useState('#ffffff');

//   useEffect(() => {
//     // selectedColor가 변경될 때마다 filteredColor를 업데이트
//     setFilteredColor(selectedColor);
//   }, [selectedColor]);

//   const handleColorChange = color => {
//     setSelectedColor(color);
//   };

//   return (
//     <View style={styles.container}>
//       {/* 하의 이미지에 적용할 색상 선택 */}
//       <ColorMatrixImageFilters
//         style={styles.bottomImage}
//         image={require('../TestImage/bottom-image.jpg')}
//         filters={[
//           {
//             type: 'colorMatrix',
//             matrix: [
//               1,
//               0,
//               0,
//               0,
//               parseInt(filteredColor.substr(1, 2), 16), // Red channel
//               0,
//               1,
//               0,
//               0,
//               parseInt(filteredColor.substr(3, 2), 16), // Green channel
//               0,
//               0,
//               1,
//               0,
//               parseInt(filteredColor.substr(5, 2), 16), // Blue channel
//               0,
//               0,
//               0,
//               1,
//               0, // Alpha channel
//             ],
//           },
//         ]}
//       />

//       {/* 색상 선택 버튼 */}
//       <TouchableOpacity
//         onPress={switchToTopScreen}
//         style={styles.colorSelectButton}>
//         <View
//           style={[styles.colorSelectSquare, {backgroundColor: selectedColor}]}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 50,
//   },
//   colorSelectButton: {
//     marginTop: 20,
//   },
//   colorSelectSquare: {
//     width: 50,
//     height: 50,
//   },
// });

// export default BottomScreen;
