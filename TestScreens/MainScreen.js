import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import PictureSelect from '../TestFunctions/PictureSelect';
import ColorSelect from '../TestFunctions/ColorSelect';
import TopScreen from '../TestScreens/TopScreen';
import BannerScreen from '../TestScreens/BannerScreen';

const FaceComponent = ({onPress, faceImage}) => {
  return (
    <View style={styles.faceContainer}>
      <TouchableOpacity onPress={onPress} style={styles.circularContainer}>
        {faceImage ? (
          <Image source={{uri: faceImage}} style={styles.faceImage} />
        ) : (
          <Text style={styles.plusSymbol}>+</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const TopComponent = ({onSelectImage}) => {
  return (
    <TouchableOpacity
      onPress={onSelectImage}
      style={[styles.topContainer, {marginTop: 10}]}>
      <Image
        source={require('../TestImage/top-image.jpg')}
        style={styles.topImage}
      />
    </TouchableOpacity>
  );
};

const BottomComponent = ({onSelectImage}) => {
  return (
    <TouchableOpacity
      onPress={onSelectImage}
      style={[styles.bottomContainer, {marginTop: 10}]}>
      <Image
        source={require('../TestImage/bottom-image.jpg')}
        style={styles.bottomImage}
      />
    </TouchableOpacity>
  );
};

const MainScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPictureSelectVisible, setIsPictureSelectVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(false); // 추가

  const handleSelectImage = imagePath => {
    setSelectedImage(imagePath);
    console.log('Selected Image Path:', imagePath);
    // 이미지 선택 후 모달 닫기
    setIsPictureSelectVisible(false);
  };

  const openPictureSelect = () => {
    // 모달 팝업 열기
    setIsPictureSelectVisible(true);
  };

  const handleShowBanner = () => {
    // Bottom 버튼을 누를 때 flag 변경
    setShowBanner(true);
    console.log(showBanner);
  };

  return (
    <View style={styles.container}>
      {/* 얼굴 클릭 시 PictureSelect를 호출하는 함수로 수정 */}
      <FaceComponent onPress={openPictureSelect} faceImage={selectedImage} />
      <TopComponent onSelectImage={() => {}} />
      <BottomComponent onSelectImage={handleShowBanner} />

      {/* PictureSelect 모달 팝업 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isPictureSelectVisible}
        onRequestClose={() => {
          // 모달이 닫힐 때 필요한 작업 수행
          setIsPictureSelectVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <PictureSelect onSelectImage={handleSelectImage} />
        </View>
      </Modal>

      {/* 조건부로 BannerScreen을 렌더링 */}
      {showBanner && <BannerScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceContainer: {
    marginBottom: 20,
  },
  circularContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSymbol: {
    fontSize: 50,
    color: 'black',
  },
  faceImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  topContainer: {
    marginBottom: 20,
  },
  topImage: {
    width: 400,
    height: 300,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  bottomContainer: {
    marginBottom: 100,
  },
  bottomImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
