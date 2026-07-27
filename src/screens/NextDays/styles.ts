import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark[500]};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[600]};
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-right: 40px; /* To balance the back button */
`;

export const TomorrowCard = styled.View`
  padding: 0 24px;
  align-items: center;
`;

export const TomorrowInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TomorrowTextInfo = styled.View`
  align-items: flex-end;
`;

export const TempContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const DetailsCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.dark[400]};
  border-radius: 16px;
  padding: 16px 24px;
  margin: 24px 24px 32px;
`;

export const DetailItem = styled.View`
  align-items: center;
  flex: 1;
`;

export const DividerLine = styled.View`
  width: 1px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const DailyList = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
`;

export const DailyCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

export const DailyDate = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90px;
`;

export const DailyWeather = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding-left: 16px;
`;

export const DailyTemps = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 80px;
`;
