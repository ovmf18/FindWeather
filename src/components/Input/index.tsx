import React from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import * as Styled from './styles';

interface InputProps extends TextInputProps {
  onLocationPress?: () => void;
}

export const Input = ({ onLocationPress, ...rest }: InputProps) => {
  const theme = useTheme();

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Feather name="search" size={20} color={theme.colors.gray[300]} style={{ marginRight: 12 }} />
        <Styled.TextInput 
          placeholderTextColor={theme.colors.gray[300]} 
          {...rest} 
        />
      </Styled.Container>

      <TouchableOpacity onPress={onLocationPress}>
        <Styled.LocationButton>
          <MaterialIcons name="location-on" size={24} color={theme.colors.white} />
        </Styled.LocationButton>
      </TouchableOpacity>
    </Styled.Wrapper>
  );
};
