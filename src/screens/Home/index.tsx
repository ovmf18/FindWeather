import React, { useState, useCallback } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Text from '../../components/Text';
import Divider from '../../components/Divider';
import { FindWeatherAPI } from '../../services/FindWeatherAPI';
import { storage, CITY_KEY } from '../../utils/storage';
import * as Styled from './styles';

import climateChangeImg from '../../assets/climate-change.png';
import rainingImg from '../../assets/raining.png';
import dropMiniatureImg from '../../assets/drop-miniature.png';
import windMiniatureImg from '../../assets/wind-miniature.png';
import rainingCloudMiniatureImg from '../../assets/raining-cloud-miniature.png';
import heavyRainingImg from '../../assets/heavy-raining.png';
import cloudImg from '../../assets/cloud.png';
import sunImg from '../../assets/sun.png';
import nightImg from '../../assets/night.png';
import thunderImg from '../../assets/thunder.png';
import snowImg from '../../assets/snow.png';
import lightRainImg from '../../assets/light-rain.png';

export const getWeatherImage = (condition: string, isDay: number) => {
  const text = condition.toLowerCase();
  
  if (text.includes('chuva') || text.includes('chuvisco') || text.includes('chuvoso')) {
    if (text.includes('forte') || text.includes('pesada')) return heavyRainingImg;
    if (text.includes('leve') || text.includes('fraca')) return lightRainImg;
    return rainingImg;
  }
  if (text.includes('neve') || text.includes('nevasca') || text.includes('gelo')) return snowImg;
  if (text.includes('trovoada') || text.includes('tempestade')) return thunderImg;
  
  if (text.includes('nublado') || text.includes('encoberto') || text.includes('nuvem') || text.includes('nuvens')) {
    return cloudImg;
  }
  
  if (text.includes('sol') || text.includes('limpo') || text.includes('claro')) {
    return isDay ? sunImg : nightImg;
  }
  
  return isDay ? cloudImg : nightImg;
};

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  
  const [hasSelectedCity, setHasSelectedCity] = useState(false);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<any>(null);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadSavedCity = async () => {
        setLoading(true);
        const savedCity = await storage.getItem(CITY_KEY);
        
        if (savedCity) {
          try {
            const response = await FindWeatherAPI.getForecast(savedCity);
            if (isActive) {
              setWeatherData(response.data);
              setHasSelectedCity(true);
            }
          } catch (err) {
            if (isActive) setHasSelectedCity(false);
          }
        } else {
          if (isActive) setHasSelectedCity(false);
        }
        
        if (isActive) setLoading(false);
      };

      loadSavedCity();

      return () => {
        isActive = false;
      };
    }, [])
  );

  const formatCurrentDate = () => {
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    const dateStr = formatter.format(new Date());
    return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  };

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

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.gray[300]} style={{ textDecorationLine: 'underline', marginTop: 16 }} align="center">
          Selecione aqui um local e{'\n'}encontre o clima em tempo real
        </Text>
      </TouchableOpacity>
    </Styled.EmptyContent>
  );

  const renderFilledState = () => {
    if (!weatherData) return null;

    const current = weatherData.current;
    const location = weatherData.location;

    return (
      <Styled.FilledContent>
        <Styled.LocationContainer>
          <TouchableOpacity onPress={() => setHasSelectedCity(false)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="map-pin" size={16} color={theme.colors.white} style={{ marginRight: 8 }} />
              <Text fontFamily={theme.fonts.family.bold} fontSize={18} color={theme.colors.white}>
                {location.name}, {location.country}
              </Text>
            </View>
          </TouchableOpacity>
          <Divider height={4} />
          <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]} style={{ textTransform: 'capitalize' }}>
            {formatCurrentDate()}
          </Text>
        </Styled.LocationContainer>

        <Styled.WeatherInfo>
          <Image source={getWeatherImage(current.condition.text, current.is_day)} style={{ width: 180, height: 180, resizeMode: 'contain', marginVertical: 20 }} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 4 }}>
            <Styled.TempText>{Math.round(current.temp_c)}</Styled.TempText>
            <Text fontFamily={theme.fonts.family.bold} fontSize={theme.fonts.size.xl} color={theme.colors.white} style={{ marginTop: 8 }}>
              °
            </Text>
          </View>
          <Text fontFamily={theme.fonts.family.regular} fontSize={theme.fonts.size.lg} color={theme.colors.white} style={{ textAlign: 'center' }}>
            {current.condition.text}
          </Text>
        </Styled.WeatherInfo>

        <Styled.DetailsCard>
          <Styled.DetailItem>
            <Image source={dropMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            <Divider height={8} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{current.humidity}%</Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Umidade</Text>
          </Styled.DetailItem>
          <Styled.DetailItem>
            <Image source={windMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            <Divider height={8} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{current.wind_kph}km/h</Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Veloc. Vento</Text>
          </Styled.DetailItem>
          <Styled.DetailItem>
            <Image source={rainingCloudMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            <Divider height={8} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{current.cloud}%</Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Nuvens</Text>
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
  };

  return (
    <Styled.Container>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={theme.colors.white} />
        </View>
      ) : (
        hasSelectedCity ? renderFilledState() : renderEmptyState()
      )}

      {/* Fake Bottom Tab */}
      <Styled.BottomTab style={{ paddingBottom: insets.bottom > 0 ? insets.bottom : 24 }}>
        <Styled.TabItem>
          <Feather name="home" size={20} color={theme.colors.white} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>Home</Text>
        </Styled.TabItem>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }} onPress={() => navigation.navigate('Search')}>
          <Feather name="search" size={20} color={theme.colors.gray[400]} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[400]}>Buscar</Text>
        </TouchableOpacity>
      </Styled.BottomTab>
    </Styled.Container>
  );
};

export default Home;
