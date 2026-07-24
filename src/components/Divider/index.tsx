import React from 'react';
import Styled from './styles';

export interface IDivider {
  width?: number;
  height?: number;
}

const Divider = ({ width, height }: IDivider) => {
  return <Styled.Container width={width} height={height} />;
};

export default Divider;
