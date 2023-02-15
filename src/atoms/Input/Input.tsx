import React, { CSSProperties, useMemo } from "react";
import { StyledInput } from "./styles";

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  content: string;
  type: string;
  width: string;
  height: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  customStyle?: CSSProperties;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInput) => {
  const {
    className,
    content,
    placeholder,
    type,
    width,
    height,
    fontSize,
    fontWeight,
    padding,
    border,
    borderRadius,
    customStyle,
    handleChange,
  } = props;

  const style = useMemo(() => {
    return {
      ...customStyle,
      width,
      height,
      fontSize,
      fontWeight,
      padding,
      border,
      borderRadius,
    };
  }, [width, height, fontSize, fontWeight, padding, border, borderRadius]);

  return (
    <StyledInput
      value={content}
      type={type}
      style={style}
      placeholder={placeholder}
      className={className}
      // autoFocus={true}
      onChange={handleChange}
    />
  );
};

export default React.memo(Input);
