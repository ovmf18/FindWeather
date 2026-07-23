import styled from 'styled-components/native';
import type { IText } from './index';

const Text = styled.Text<IText>`
  font-family: ${(props: any) => props.fontFamily};
  font-size: ${(props: any) => props.fontSize}px;
  color: ${(props: any) => props.color};
  text-align: ${(props: any) => props.align};
`;

export default { Text };
