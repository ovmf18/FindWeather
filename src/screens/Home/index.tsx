import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '../../components/Text';
import Divider from '../../components/Divider';
import * as Styled from './styles';

import climateChangeImg from '../../assets/climate-change.png';
import rainingImg from '../../assets/raining.png';
import dropMiniatureImg from '../../assets/drop-miniature.png';
import windMiniatureImg from '../../assets/wind-miniature.png';
import rainingCloudMiniatureImg from '../../assets/raining-cloud-miniature.png';
import heavyRainingImg from '../../assets/heavy-raining.png';
import cloudImg from '../../assets/cloud.png';
import sunImg from '../../assets/sun.png';

const Home = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  // Estado para alternar entre a visão vazia e a preenchida para o desafio do Dia 3
  const [hasSelectedCity, setHasSelectedCity] = useState(false);

  const renderEmptyState = () => (
    <Styled.EmptyContent>
      <Text
        fontFamily={theme.fonts.family.bold}
        fontSize={32}
        color={theme.colors.white}
      >
        Find<Text fontFamily={theme.fonts.family.bold} fontSize={32} color={theme.colors.white}>Weather</Text>
      </Text>

      <Image
        source={climateChangeImg}
        style={{ width: 280, height: 280, marginVertical: 48, resizeMode: 'contain' }}
      />

      <TouchableOpacity onPress={() => setHasSelectedCity(true)}>
        <Text
          fontFamily={theme.fonts.family.regular}
          fontSize={16}
          color={theme.colors.gray[200]}
          align="center"
          style={{ textDecorationLine: 'underline', lineHeight: 24 }}
        >
          Selecione aqui um local e{'\n'}encontre o clima em tempo real
        </Text>
      </TouchableOpacity>
    </Styled.EmptyContent>
  );

  const renderFilledState = () => (
    <Styled.FilledContent>
      <Styled.LocationContainer>
        <TouchableOpacity onPress={() => setHasSelectedCity(false)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="map-pin" size={16} color={theme.colors.white} style={{ marginRight: 8 }} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={18} color={theme.colors.white}>
              A Coruña, Espanha
            </Text>
          </View>
        </TouchableOpacity>
        <Divider height={4} />
        <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]}>
          Domingo, 01 Jan de 2023
        </Text>
      </Styled.LocationContainer>

      <Styled.WeatherInfo>
        <Image source={rainingImg} style={{ width: 220, height: 220, resizeMode: 'contain' }} />
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 4 }}>
          <Styled.TempText>23</Styled.TempText>
          <Text fontFamily={theme.fonts.family.bold} fontSize={theme.fonts.size.xl} color={theme.colors.white} style={{ marginTop: 8 }}>
            °
          </Text>
        </View>
        <Text fontFamily={theme.fonts.family.regular} fontSize={theme.fonts.size.lg} color={theme.colors.white}>
          Chuva Moderada
        </Text>
      </Styled.WeatherInfo>

      <Styled.DetailsCard>
        <Styled.DetailItem>
          <Image source={dropMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          <Divider height={8} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>24%</Text>
          <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Umidade</Text>
        </Styled.DetailItem>
        <Styled.DetailItem>
          <Image source={windMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          <Divider height={8} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>20km/h</Text>
          <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Veloc. Vento</Text>
        </Styled.DetailItem>
        <Styled.DetailItem>
          <Image source={rainingCloudMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          <Divider height={8} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>76%</Text>
          <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Chuva</Text>
        </Styled.DetailItem>
      </Styled.DetailsCard>

      <Styled.ForecastHeader>
        <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.white}>Hoje</Text>
        <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]}>Próximos 5 dias {'>'}</Text>
      </Styled.ForecastHeader>

      <Styled.ForecastList>
        {[
          { time: '09:00', temp: '23°', icon: heavyRainingImg },
          { time: '13:00', temp: '18°', icon: cloudImg },
          { time: '17:00', temp: '8°', icon: sunImg },
          { time: '23:00', temp: '28°', icon: rainingImg },
        ].map((item, index) => (
          <Styled.ForecastCard key={index}>
            <Text fontFamily={theme.fonts.family.bold} fontSize={16} color={theme.colors.white}>{item.temp}</Text>
            <Divider height={12} />
            <Image source={item.icon} style={{ width: 44, height: 44, resizeMode: 'contain' }} />
            <Divider height={12} />
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[300]}>{item.time}</Text>
          </Styled.ForecastCard>
        ))}
      </Styled.ForecastList>
    </Styled.FilledContent>
  );

  return (
    <Styled.Container>
      {hasSelectedCity ? renderFilledState() : renderEmptyState()}

      {/* Fake Bottom Tab */}
      <Styled.BottomTab style={{ paddingBottom: insets.bottom > 0 ? insets.bottom : 24 }}>
        <Styled.TabItem>
          <Feather name="home" size={20} color={theme.colors.white} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>Home</Text>
        </Styled.TabItem>
        <Styled.TabItem>
          <Feather name="search" size={20} color={theme.colors.gray[400]} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[400]}>Buscar</Text>
        </Styled.TabItem>
      </Styled.BottomTab>
    </Styled.Container>
  );
};

export default Home;
