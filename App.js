// import React, {useState, useEffect} from 'react';
// import {SectionList, View, Text, Dimensions, StyleSheet} from 'react-native';

// import BannerScreen from './TestScreens/BannerScreen'; // 경로 확인
// // // import FrontScreen from './TestScreens/FrontScreen'; // 경로 확인
// import HomeScreen from './TestScreens/HomeScreen'; // 경로 확인
// // // import AddressSearch from './TestFunctions/AddressSearch'; // 경로 확인

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.homeScreenContainer}>
//         <HomeScreen />
//       </View>
//       <BannerScreen />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   homeScreenContainer: {
//     flex: 1, // 나머지 공간을 모두 차지
//   },
// });

// export default App;

// export default App;

/* react-native-color-panel */
// import React, {useState} from 'react';
// import ColorPanel from 'react-native-color-panel';

// const App = () => {
//   const [color, setColor] = useState('#ffffff');

//   return (
//     <ColorPanel
//       style={{flex: 1}}
//       color={color}
//       onChange={selectedColor => setColor(selectedColor)}
//     />
//   );
// };

// export default App;
// ColorPanelWithRGBInput.js

// App.js

import React from 'react';
import ColorSelect from './TestFunctions/ColorSelect';
import MainScreen from './TestScreens/MainScreen'; // 경로 확인
import TopScreen from './TestScreens/TopScreen'; // 경로 확인

const App = () => {
  // return <ColorSelect />;
  return <MainScreen />;
  // return <TopScreen />;
  // return <Navigation />;
};

export default App;

/* react-native-color-wheel */
// import React, {useState} from 'react';
// import ColorWheel from 'react-native-color-wheel';

// const App = () => {
//   const [color, setColor] = useState('#ffffff');

//   return (
//     <ColorWheel
//       initialColor={color}
//       onColorChange={selectedColor => setColor(selectedColor)}
//       style={{flex: 1}}
//     />
//   );
// };

// export default App;
