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

// import React, {useState} from 'react';
// import ColorSelect from './TestFunctions/ColorSelect';
// import MainScreen from './TestScreens/MainScreen';
// import TopScreen from './TestScreens/TopScreen';
// import BannerScreen from './TestScreens/BannerScreen';

// const App = () => {
//   // return <ColorSelect />;
//   // return <MainScreen />;
//   return <TopScreen />;
//   // return <Navigation />;
// };

// export default App;

// App.js

import React, {useState} from 'react';
import MainScreen from './TestScreens/MainScreen';
import TopScreen from './TestScreens/TopScreen';
import BottomScreen from './TestScreens/BottomScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('main');

  const switchToMainScreen = () => {
    setCurrentScreen('main');
  };

  const switchToTopScreen = () => {
    setCurrentScreen('top');
  };

  const switchToBottomScreen = () => {
    setCurrentScreen('bottom');
  };

  return (
    <React.Fragment>
      {currentScreen === 'main' ? (
        <MainScreen
          switchToTopScreen={switchToTopScreen}
          switchToBottomScreen={switchToBottomScreen}
        />
      ) : currentScreen === 'top' ? (
        <TopScreen switchToMainScreen={switchToMainScreen} />
      ) : currentScreen === 'bottom' ? (
        <BottomScreen switchToMainScreen={switchToMainScreen} />
      ) : (
        <BannerScreen switchToMainScreen={switchToMainScreen} />
      )}
    </React.Fragment>
  );
};

export default App;
