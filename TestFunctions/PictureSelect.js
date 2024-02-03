import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ActionSheet from '@alessiocancian/react-native-actionsheet';

const PictureSelect = ({onSelectImage}) => {
  const actionSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // 컴포넌트가 로드될 때 자동으로 actionsheet를 띄움
    showActionSheet();
  }, []);

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
      cropping: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        onSelectImage(image.path); // 이미지 선택 시 콜백 호출
      })
      .catch(error => {
        console.log('Camera Error: ', error);
      });
  };

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        onSelectImage(image.path); // 이미지 선택 시 콜백 호출
      })
      .catch(error => {
        console.log('Image Picker Error: ', error);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* 이미지 선택 시 미리보기 */}
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            marginTop: 10, // 간격 조절
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

export default PictureSelect;
