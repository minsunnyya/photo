import React, {useState, useEffect} from 'react';
import {SectionList, View, Text, Dimensions, StyleSheet} from 'react-native';

import BannerScreen from './TestScreens/BannerScreen'; // 경로 확인
// // import FrontScreen from './TestScreens/FrontScreen'; // 경로 확인
import HomeScreen from './TestScreens/HomeScreen'; // 경로 확인
// // import AddressSearch from './TestFunctions/AddressSearch'; // 경로 확인

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeScreenContainer}>
        <HomeScreen />
      </View>
      <BannerScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreenContainer: {
    flex: 1, // 나머지 공간을 모두 차지
  },
});

export default App;

// const App = () => {
//   const sections = [
//     {title: 'Home Screen', data: [<HomeScreen key="home" />]},
//     // ...기타 섹션들
//   ];

//   return (
//     <SectionList
//       sections={sections}
//       keyExtractor={(item, index) => item + index}
//       // renderItem={({item}) => (
//       //   <View style={{height: 600}}>{item}</View> // 섹션의 높이를 600으로 설정
//       // )}
//       renderItem={({item}) => <View>{item}</View>}
//       renderSectionHeader={({section: {title}}) => (
//         <Text style={{fontWeight: 'bold'}}>{title}</Text>
//       )}
//       contentContainerStyle={{flexGrow: 1}} // 여기에 스타일 추가
//       ListFooterComponent={<BannerScreen />} // 배너 스크린을 리스트 헤더로 추가
//     />
//   );
// };

// export default App;

// const App = () => {
//   const sections = [
//     {title: 'Home Screen', data: [<HomeScreen key="home" />]},
//     // ...기타 섹션들
//   ];

//   return (
//     <SectionList
//       sections={sections}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({item}) => <View>{item}</View>}
//       renderSectionHeader={({section: {title}}) => (
//         <Text style={{fontWeight: 'bold'}}>{title}</Text>
//       )}
//       ListFooterComponent={<BannerScreen />} // 배너 스크린을 여기에 추가
//     />
//   );
// };

// export default App;

// const App = () => {
//   const [listHeight, setListHeight] = useState(0);
//   const screenHeight = Dimensions.get('window').height;

//   // console.log(screenHeight);
//   console.log('listHeight :', listHeight);

//   const sections = [
//     {title: 'Home Screen', data: [<HomeScreen key="home" />]},
//     // 다른 섹션들...
//   ];

//   const renderFooter = () => {
//     const footerHeight = screenHeight - listHeight;
//     const isFooterVisible = footerHeight > 0;

//     console.log('footerHeight :', footerHeight);

//     return (
//       <View style={[styles.footer, isFooterVisible && {height: footerHeight}]}>
//         {isFooterVisible && <BannerScreen />}
//       </View>
//     );
//   };

//   return (
//     <SectionList
//       sections={sections}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({item}) => <View>{item}</View>}
//       renderSectionHeader={({section: {title}}) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//       ListFooterComponent={renderFooter}
//       onContentSizeChange={(w, h) => setListHeight(h)}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   header: {fontWeight: 'bold'},
//   footer: {justifyContent: 'flex-end'},
// });

// export default App;

// import React, {useRef, useState} from 'react';
// import {View, Button, Image, Platform} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import ActionSheet from '@alessiocancian/react-native-actionsheet';

// const App = () => {
//   const actionSheetRef = useRef(null);
//   const [imageUri, setImageUri] = useState(null);

//   const showActionSheet = () => {
//     actionSheetRef.current.show();
//   };

//   const handlePress = index => {
//     if (index === 0) {
//       takePhoto();
//     } else if (index === 1) {
//       chooseFromLibrary();
//     }
//     // 취소 버튼을 클릭했을 경우, 별도의 동작은 필요하지 않습니다.
//   };

//   const takePhoto = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setImageUri(image.path);
//       })
//       .catch(error => {
//         console.log('Camera Error: ', error);
//       });
//   };

//   const chooseFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         setImageUri(image.path);
//       })
//       .catch(error => {
//         console.log('Image Picker Error: ', error);
//       });
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button title="사진 선택하기" onPress={showActionSheet} />
//       {imageUri && (
//         <Image source={{uri: imageUri}} style={{width: 300, height: 300}} />
//       )}
//       <ActionSheet
//         ref={actionSheetRef}
//         title={'사진을 가져올 방법을 선택하세요'}
//         options={['카메라 사용', '갤러리에서 선택', '취소']}
//         cancelButtonIndex={2}
//         onPress={handlePress}
//       />
//     </View>
//   );
// };

// export default App;

// import React, {useRef, useState} from 'react';
// import {View, Button, Image, Platform, Alert} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import ActionSheet from '@alessiocancian/react-native-actionsheet';
// import ImageEditor from 'react-native-image-crop-tools';

// const App = () => {
//   const actionSheetRef = useRef(null);
//   const [imageUri, setImageUri] = useState(null);

//   const showActionSheet = () => {
//     actionSheetRef.current.show();
//   };

//   const handlePress = index => {
//     if (index === 0) {
//       takePhoto();
//     } else if (index === 1) {
//       chooseFromLibrary();
//     }
//   };

//   const takePhoto = () => {
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true, // 사진 촬영 후 자르기 활성화
//       cropperCircleOverlay: true, // 원형 크롭 오버레이 활성화
//       freeStyleCropEnabled: true, // 자유롭게 잘라내기
//     })
//       .then(image => {
//         setImageUri(image.path);
//       })
//       .catch(error => {
//         console.log('Camera Error: ', error);
//       });
//   };

//   const chooseFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true, // 사진 촬영 후 자르기 활성화
//       cropperCircleOverlay: true, // 원형 크롭 오버레이 활성화
//       freeStyleCropEnabled: true, // 자유롭게 잘라내기
//     })
//       .then(image => {
//         setImageUri(image.path);
//       })
//       .catch(error => {
//         console.log('Image Picker Error: ', error);
//       });
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button title="사진 선택하기" onPress={showActionSheet} />
//       {imageUri && (
//         <Image
//           source={{uri: imageUri}}
//           style={{
//             width: 150,
//             height: 150, // 너비와 높이를 동일하게 설정
//             borderRadius: 75, // 너비와 높이의 절반 값으로 설정하여 원형으로 보이게 함
//           }}
//         />
//       )}
//       <ActionSheet
//         ref={actionSheetRef}
//         title={'사진을 가져올 방법을 선택하세요'}
//         options={['카메라 사용', '갤러리에서 선택', '취소']}
//         cancelButtonIndex={2}
//         onPress={handlePress}
//       />
//     </View>
//   );
// };

// export default App;
