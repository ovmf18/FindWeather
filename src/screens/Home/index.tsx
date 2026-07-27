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

import { getWeatherIcon } from '../../utils/weatherIcons';
import dropMiniatureImg from '../../assets/drop-miniature.png';
import windMiniatureImg from '../../assets/wind-miniature.png';
import rainingCloudMiniatureImg from '../../assets/raining-cloud-miniature.png';
import climateChangeImg from '../../assets/climate-change.png';

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

    const current = weatherData.list[0];
    const location = weatherData.city;
    const forecastItems = weatherData.list.slice(0, 4);

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
          <Image source={getWeatherIcon(current.weather[0].description, current.sys.pod === 'd')} style={{ width: 180, height: 180, resizeMode: 'contain', marginVertical: 20 }} />
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 4 }}>
            <Styled.TempText>{Math.round(current.main.temp)}</Styled.TempText>
            <Text fontFamily={theme.fonts.family.bold} fontSize={theme.fonts.size.xl} color={theme.colors.white} style={{ marginTop: 8 }}>
              °
            </Text>
          </View>
          <Text fontFamily={theme.fonts.family.regular} fontSize={theme.fonts.size.lg} color={theme.colors.white} style={{ textAlign: 'center', textTransform: 'capitalize' }}>
            {current.weather[0].description}
          </Text>
        </Styled.WeatherInfo>

        <Styled.DetailsCard>
          <Styled.DetailItem>
            <Image source={dropMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            <Divider height={8} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{current.main.humidity}%</Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Umidade</Text>
          </Styled.DetailItem>
          <Styled.DetailItem>
            <Image source={windMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            <Divider height={8} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{Math.round(current.wind.speed * 3.6)}km/h</Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Veloc. Vento</Text>
          </Styled.DetailItem>
          <Styled.DetailItem>
            <Image source={rainingCloudMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
            <Divider height={8} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{current.clouds.all}%</Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Nuvens</Text>
          </Styled.DetailItem>
        </Styled.DetailsCard>

      <Styled.ForecastHeader>
        <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.white}>Hoje</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NextDays', { weatherData })}>
          <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]}>Próximos 5 dias {'>'}</Text>
        </TouchableOpacity>
      </Styled.ForecastHeader>

      <Styled.ForecastList>
        {forecastItems.map((item: any, index: number) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
          return (
            <Styled.ForecastCard key={index}>
              <Text fontFamily={theme.fonts.family.bold} fontSize={16} color={theme.colors.white}>{Math.round(item.main.temp)}°</Text>
              <Divider height={12} />
              <Image source={getWeatherIcon(item.weather[0].description, item.sys.pod === 'd')} style={{ width: 44, height: 44, resizeMode: 'contain' }} />
              <Divider height={12} />
              <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[300]}>{time}</Text>
            </Styled.ForecastCard>
          );
        })}
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


    </Styled.Container>
  );
};

export default Home;
