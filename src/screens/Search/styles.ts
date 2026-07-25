import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: any) => props.theme.colors.dark[500]};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-width: 1px;
  border-color: ${(props: any) => props.theme.colors.dark[300]};
  justify-content: center;
  align-items: center;
`;

export const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
