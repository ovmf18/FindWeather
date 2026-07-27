import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import Text from '../../components/Text';
import Divider from '../../components/Divider';
import * as Styled from './styles';

import { getWeatherIcon } from '../../utils/weatherIcons';
import { getNext5DaysForecast } from '../../utils/weatherUtils';

import dropMiniatureImg from '../../assets/drop-miniature.png';
import windMiniatureImg from '../../assets/wind-miniature.png';
import rainingCloudMiniatureImg from '../../assets/raining-cloud-miniature.png';

const NextDays = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();

  const weatherData = route.params?.weatherData;
  if (!weatherData) {
    return (
      <Styled.Container style={{ paddingTop: insets.top, alignItems: 'center', justifyContent: 'center' }}>
        <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.white}>
          Dados indisponíveis.
        </Text>
      </Styled.Container>
    );
  }

  const next5Days = getNext5DaysForecast(weatherData.list);
  const tomorrow = next5Days[0];
  const upcomingDays = next5Days.slice(1);

  return (
    <Styled.Container style={{ paddingTop: insets.top }}>
      <Styled.Header>
        <Styled.BackButton onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={24} color={theme.colors.gray[300]} />
        </Styled.BackButton>
        <Styled.TitleContainer>
          <Feather name="calendar" size={18} color={theme.colors.gray[300]} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.gray[300]}>
            Próximos 5 dias
          </Text>
        </Styled.TitleContainer>
      </Styled.Header>

      <Styled.TomorrowCard>
        <Styled.TomorrowInfo>
          <Image 
            source={getWeatherIcon(tomorrow.iconDesc, tomorrow.isDay)} 
            style={{ width: 160, height: 160, resizeMode: 'contain', marginLeft: -20 }} 
          />
          <Styled.TomorrowTextInfo>
            <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.gray[300]}>
              Amanhã
            </Text>
            <Styled.TempContainer>
              <Text fontFamily={theme.fonts.family.bold} fontSize={56} color={theme.colors.white} style={{ lineHeight: 64 }}>
                {tomorrow.maxTemp}
              </Text>
              <Text fontFamily={theme.fonts.family.bold} fontSize={24} color={theme.colors.white} style={{ marginBottom: 16 }}>
                °
              </Text>
              <Text fontFamily={theme.fonts.family.bold} fontSize={24} color={theme.colors.gray[400]} style={{ marginBottom: 12, marginLeft: 4 }}>
                / {tomorrow.minTemp}°
              </Text>
            </Styled.TempContainer>
            <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]} style={{ textTransform: 'capitalize' }}>
              {tomorrow.iconDesc}
            </Text>
          </Styled.TomorrowTextInfo>
        </Styled.TomorrowInfo>
      </Styled.TomorrowCard>

      <Styled.DetailsCard>
        <Styled.DetailItem>
          <Image source={dropMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          <Divider height={8} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{tomorrow.humidity}%</Text>
          <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Umidade</Text>
        </Styled.DetailItem>
        <Styled.DividerLine />
        <Styled.DetailItem>
          <Image source={windMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          <Divider height={8} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{tomorrow.windSpeed}km/h</Text>
          <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Veloc. Vento</Text>
        </Styled.DetailItem>
        <Styled.DividerLine />
        <Styled.DetailItem>
          <Image source={rainingCloudMiniatureImg} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
          <Divider height={8} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>{tomorrow.rainProb}%</Text>
          <Text fontFamily={theme.fonts.family.regular} fontSize={12} color={theme.colors.gray[400]}>Chuva</Text>
        </Styled.DetailItem>
      </Styled.DetailsCard>

      <Styled.DailyList showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        {upcomingDays.map((day, index) => (
          <Styled.DailyCard key={index}>
            <Styled.DailyDate>
              <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>
                {day.dayOfWeek}
              </Text>
              <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]}>
                {' '}{day.dateStr}
              </Text>
            </Styled.DailyDate>

            <Styled.DailyWeather>
              <Image 
                source={getWeatherIcon(day.iconDesc, day.isDay)} 
                style={{ width: 28, height: 28, resizeMode: 'contain', marginRight: 12 }} 
              />
              <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[300]} style={{ textTransform: 'capitalize' }}>
                {day.iconDesc}
              </Text>
            </Styled.DailyWeather>

            <Styled.DailyTemps>
              <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>
                {day.maxTemp}°
              </Text>
              <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[400]}>
                {' '}/ {day.minTemp}°
              </Text>
            </Styled.DailyTemps>
          </Styled.DailyCard>
        ))}
      </Styled.DailyList>
    </Styled.Container>
  );
};

export default NextDays;
