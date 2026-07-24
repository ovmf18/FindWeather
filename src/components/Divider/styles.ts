import styled from 'styled-components/native';
import type { IDivider } from './index';

const Container = styled.View<IDivider>`
  width: ${(props: any) => props.width || 0}px;
  height: ${(props: any) => props.height || 0}px;
`;

export default { Container };
