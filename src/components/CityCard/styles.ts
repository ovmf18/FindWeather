import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${(props: any) => props.theme.colors.dark[400]};
  border-radius: 20px;
  padding: 20px;
  margin-top: 32px;
  width: 170px;
`;
