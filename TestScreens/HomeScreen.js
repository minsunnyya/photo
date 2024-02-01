// HomeScreen.js
import React, {useRef, useState} from 'react';
import {View, Button, Image, Platform, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import ImageEditor from 'react-native-image-crop-tools';

const HomeScreen = () => {
  const actionSheetRef = useRef(null);
  const [imageUri, setImageUri] = useState(null);

  const showActionSheet = () => {
    actionSheetRef.current.show();
  };

  const handlePress = index => {
    if (index === 0) {
      takePhoto();
    } else if (index === 1) {
      chooseFromLibrary();
    }
  };

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true, // 사진 촬영 후 자르기 활성화
      cropperCircleOverlay: true, // 원형 크롭 오버레이 활성화
      freeStyleCropEnabled: true, // 자유롭게 잘라내기
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => {
        console.log('Camera Error: ', error);
      });
  };

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true, // 사진 촬영 후 자르기 활성화
      cropperCircleOverlay: true, // 원형 크롭 오버레이 활성화
      freeStyleCropEnabled: true, // 자유롭게 잘라내기
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => {
        console.log('Image Picker Error: ', error);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="사진 선택하기" onPress={showActionSheet} />
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{
            width: 150,
            height: 150, // 너비와 높이를 동일하게 설정
            borderRadius: 75, // 너비와 높이의 절반 값으로 설정하여 원형으로 보이게 함
          }}
        />
      )}
      <ActionSheet
        ref={actionSheetRef}
        title={'사진을 가져올 방법을 선택하세요'}
        options={['카메라 사용', '갤러리에서 선택', '취소']}
        cancelButtonIndex={2}
        onPress={handlePress}
      />
    </View>
  );
};

export default HomeScreen;
