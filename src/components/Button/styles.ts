import styled from 'styled-components/native';
import type { IButton } from './index';

const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<IButton>`
  background-color: ${(props: any) => props.backgroundColor};
  border-color: ${(props: any) => props.borderColor};
  border-width: ${(props: any) => (props.borderColor !== 'transparent' && props.borderColor ? '1px' : '0px')};
  border-radius: ${(props: any) => props.borderRadius}px;
  height: ${(props: any) => props.height}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default { Button };
