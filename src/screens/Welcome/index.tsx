import React from 'react';
import { Image } from 'react-native';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Styled from './styles';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import cloudAndThunder from '../../assets/cloud-and-thunder.png';

const Welcome = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Styled.Container>
      <Styled.Content>
        <Image
          source={cloudAndThunder}
          style={{ width: 180, height: 180, resizeMode: 'contain', marginBottom: 32 }}
        />
        <Text
          fontFamily={theme.fonts.family.bold}
          fontSize={theme.fonts.size.xxl}
          color={theme.colors.white}
          align="center"
        >
          Descubra o Clima{'\n'}na sua Cidade
        </Text>
        <Styled.SubtitleWrapper>
          <Text
            fontFamily={theme.fonts.family.regular}
            fontSize={theme.fonts.size.md}
            color={theme.colors.gray[300]}
            align="center"
          >
            Com o <Text fontFamily={theme.fonts.family.bold} fontSize={theme.fonts.size.md} color={theme.colors.gray[300]}>FindWeather</Text> nunca{'\n'}ficou tão fácil ter a previsão do{'\n'}tempo na palma da sua mão
          </Text>
        </Styled.SubtitleWrapper>
      </Styled.Content>

      <Button
        backgroundColor="transparent"
        borderColor={theme.colors.gray[500]}
        borderRadius={16}
        height={56}
        onPress={() => navigation.navigate('Home')}
      >
        <Text
          fontFamily={theme.fonts.family.regular}
          fontSize={theme.fonts.size.md}
          color={theme.colors.white}
        >
          Iniciar
        </Text>
      </Button>
    </Styled.Container>
  );
};

export default Welcome;
