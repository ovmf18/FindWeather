import React, { ReactNode } from "react";
import { TextProps as RNTextProps } from "react-native";
import Styled from "./styles";

export interface IText extends RNTextProps {
  children: ReactNode;
  fontFamily: string;
  fontSize: number;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
}

const Text = ({
  children,
  fontFamily,
  fontSize,
  color = "#ffffff",
  align = "left",
  ...rest
}: IText): React.JSX.Element => {
  return (
    <Styled.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      align={align}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
};

export default Text;
