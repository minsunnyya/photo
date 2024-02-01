/* 배너 광고 */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';

const BannerScreen = () => {
  return (
    <View style={styles.container}>
      <BannerAd
        /* Test Banner */
        unitId={TestIds.BANNER}
        /* Real Banner */
        // unitId={'ca-app-pub-8968530155230988/9630066095'}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%', // 화면 너비와 동일하게 설정
    position: 'absolute', // 절대 위치를 사용
    bottom: 0, // 하단에 위치하도록 설정
  },
});

export default BannerScreen;
