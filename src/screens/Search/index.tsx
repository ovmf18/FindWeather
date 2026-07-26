import React, { useState } from 'react';
import { View, Image, ActivityIndicator, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '../../components/Text';
import { Input } from '../../components/Input';
import { CityCard } from '../../components/CityCard';
import { FindWeatherAPI } from '../../services/FindWeatherAPI';
import { storage, CITY_KEY } from '../../utils/storage';
import * as Styled from './styles';

import notFoundImg from '../../assets/not-found-destination.png';

const Search = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!city.trim()) return;

    Keyboard.dismiss();
    setLoading(true);
    setError(false);
    setResult(null);

    FindWeatherAPI.getForecast(city)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header style={{ marginTop: insets.top }}>
          <Styled.BackButton onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={24} color={theme.colors.gray[300]} />
          </Styled.BackButton>
          <Text fontFamily={theme.fonts.family.bold} fontSize={20} color={theme.colors.white}>
            Busca
          </Text>
        </Styled.Header>

        <Input 
          placeholder="Digite uma cidade"
          value={city}
          onChangeText={setCity}
          onLocationPress={handleSearch}
          onSubmitEditing={handleSearch}
        />

        {loading && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={theme.colors.white} />
          </View>
        )}

        {result && !error && !loading && (
          <CityCard 
            temperature={Math.round(result.current.temp_c).toString()}
            condition={result.current.condition.text}
            city={result.location.name}
            country={result.location.country}
            icon={{ uri: 'https:' + result.current.condition.icon }} 
            onPress={async () => {
              await storage.setItem(CITY_KEY, result.location.name);
              navigation.navigate('Home');
            }}
          />
        )}

        {error && !loading && (
          <Styled.ErrorContainer>
            <Image source={notFoundImg} style={{ width: 280, height: 280, resizeMode: 'contain', marginBottom: 24 }} />
            <Text fontFamily={theme.fonts.family.bold} fontSize={24} color={theme.colors.white} style={{ marginBottom: 16 }}>
              OPS!
            </Text>
            <Text fontFamily={theme.fonts.family.regular} fontSize={16} color={theme.colors.gray[300]} align="center">
              Não foi possível encontrar o local{'\n'}desejado!
            </Text>
          </Styled.ErrorContainer>
        )}
      </Styled.Content>

      {/* Fake Bottom Tab */}
      <View style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: insets.bottom > 0 ? insets.bottom : 24,
        paddingTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
        backgroundColor: theme.colors.dark[500], borderTopWidth: 1, borderTopColor: theme.colors.dark[400]
      }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }} onPress={() => navigation.navigate('Home')}>
          <Feather name="home" size={20} color={theme.colors.gray[400]} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.regular} fontSize={14} color={theme.colors.gray[400]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 32 }}>
          <Feather name="search" size={20} color={theme.colors.white} style={{ marginRight: 8 }} />
          <Text fontFamily={theme.fonts.family.bold} fontSize={14} color={theme.colors.white}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </Styled.Container>
  );
};

export default Search;
