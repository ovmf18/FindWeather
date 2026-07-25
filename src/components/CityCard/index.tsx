import React from 'react';
import { View, Image, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import Text from '../Text';
import Divider from '../Divider';
import * as Styled from './styles';

interface CityCardProps extends TouchableOpacityProps {
  temperature: string;
  condition: string;
  city: string;
  country: string;
  icon: any;
}

export const CityCard = ({ temperature, condition, city, country, icon, ...rest }: CityCardProps) => {
  const theme = useTheme();

  return (
    <Styled.Container activeOpacity={0.7} {...rest}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Text fontFamily={theme.fonts.family.bold} fontSize={32} color={theme.colors.white}>
            {temperature}
          </Text>
          <Text fontFamily={theme.fonts.family.bold} fontSize={16} color={theme.colors.white} style={{ marginTop: 4 }}>
            °
          </Text>
        </View>
        <Image source={icon} style={{ width: 44, height: 44, resizeMode: 'contain' }} />
      </View>
      <Divider height={8} />
      <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]}>
        {condition}
      </Text>
      <Divider height={12} />
      <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.white}>
        {city},{'\n'}{country}
      </Text>
    </Styled.Container>
  );
};
