import React, {useState, useEffect} from 'react';
import {Button, Alert} from 'react-native';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from 'react-native-google-mobile-ads';

const FrontScreen = () => {
  const [interstitialAd, setInterstitialAd] = useState(null);
  const [adLoaded, setAdLoaded] = useState(false);

  const loadAd = () => {
    // 광고 인스턴스 생성
    const newAd = InterstitialAd.createForAdRequest(
      __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-8968530155230988/9630066095',
      {
        requestNonPersonalizedAdsOnly: true,
      },
    );

    // 광고 이벤트 리스너 설정
    const unsubscribeLoaded = newAd.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setAdLoaded(true);
      },
    );

    const unsubscribeClosed = newAd.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setAdLoaded(false);
        loadAd(); // 광고가 닫힌 후 새 광고 로드
      },
    );

    // 광고 로드
    newAd.load();

    // 인스턴스 업데이트
    setInterstitialAd(newAd);

    // 이벤트 리스너 정리
    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
    };
  };

  useEffect(() => {
    return loadAd();
  }, []);

  const showAd = () => {
    if (adLoaded) {
      interstitialAd.show();
    } else {
      Alert.alert('광고가 아직 준비되지 않았습니다.');
    }
  };

  return <Button title="전면 광고 보기" onPress={showAd} />;
};

export default FrontScreen;
