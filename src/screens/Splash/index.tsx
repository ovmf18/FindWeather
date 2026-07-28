import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import Text from '../../components/Text';
import { storage, WELCOME_KEY } from '../../utils/storage';
import cloudAndThunder from '../../assets/cloud-and-thunder.png';

import * as Styled from './styles';

const Splash = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();

    const timer = setTimeout(async () => {
      const hasSeenWelcome = await storage.getItem(WELCOME_KEY);
      if (hasSeenWelcome === 'true') {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Welcome');
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation, opacity, scale]);

  return (
    <Styled.Container>
      <Animated.Image 
        source={cloudAndThunder} 
        style={{ 
          width: 200, 
          height: 200, 
          resizeMode: 'contain',
          opacity: opacity,
          transform: [{ scale: scale }]
        }} 
      />
      <Animated.View style={{ opacity, marginTop: 24 }}>
        <Text
          fontFamily={theme.fonts.family.bold}
          fontSize={32}
          color={theme.colors.white}
        >
          Find<Text fontFamily={theme.fonts.family.bold} fontSize={32} color={theme.colors.white}>Weather</Text>
        </Text>
      </Animated.View>
    </Styled.Container>
  );
};

export default Splash;
