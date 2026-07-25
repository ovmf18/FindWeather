import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${(props: any) => props.theme.colors.dark[400]};
  border-radius: 12px;
  padding: 0 16px;
  height: 56px;
  margin-right: 12px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${(props: any) => props.theme.colors.white};
  font-family: ${(props: any) => props.theme.fonts.family.regular};
  font-size: ${(props: any) => props.theme.fonts.size.xs}px;
`;

export const LocationButton = styled.View`
  width: 56px;
  height: 56px;
  background-color: ${(props: any) => props.theme.colors.dark[400]};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
