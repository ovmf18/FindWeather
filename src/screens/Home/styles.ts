import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: any) => props.theme.colors.dark[500]};
`;

export const EmptyContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const FilledContent = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 24, paddingBottom: 100 }
})`
  flex: 1;
`;

export const LocationContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const WeatherInfo = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const WeatherImage = styled.Image`
  width: 200px;
  height: 200px;
  resize-mode: contain;
`;

export const TempText = styled.Text`
  font-family: ${(props: any) => props.theme.fonts.family.bold};
  font-size: ${(props: any) => props.theme.fonts.size.giant}px;
  color: ${(props: any) => props.theme.colors.white};
`;

export const DetailsCard = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props: any) => props.theme.colors.dark[400]};
  border-radius: 20px;
  padding: 16px;
  margin-top: 32px;
  border-width: 1px;
  border-color: ${(props: any) => props.theme.colors.dark[300]};
`;

export const DetailItem = styled.View`
  align-items: center;
`;

export const ForecastHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const ForecastList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ForecastCard = styled.View`
  background-color: ${(props: any) => props.theme.colors.dark[400]};
  border-radius: 20px;
  padding: 16px;
  align-items: center;
  margin-right: 12px;
  min-width: 72px;
  border-width: 1px;
  border-color: ${(props: any) => props.theme.colors.dark[300]};
`;

// Fake Bottom Tab
export const BottomTab = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props: any) => props.theme.colors.dark[500]};
  border-top-width: 1px;
  border-top-color: ${(props: any) => props.theme.colors.dark[400]};
`;

export const TabItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0 32px;
`;
