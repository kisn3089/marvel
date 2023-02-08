import React, { CSSProperties, useMemo } from "react";
import { StyledButton } from "./styles";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  width: string;
  height: string;
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
  backgroundColor?: string;
  customStyle?: CSSProperties;
  disabled?: boolean;
  padding?: string;
  handleClick?: () => void;
}

const Button = (props: IButton) => {
  const {
    id,
    className,
    color,
    content,
    width,
    height,
    fontSize,
    fontWeight,
    borderRadius,
    backgroundColor,
    customStyle,
    disabled,
    padding,
    handleClick,
  } = props;

  const style = useMemo(() => {
    return {
      ...customStyle,
      width,
      height,
      color,
      fontSize,
      borderRadius,
      backgroundColor,
      fontWeight,
      padding,
    };
  }, [
    width,
    height,
    color,
    fontSize,
    borderRadius,
    backgroundColor,
    fontWeight,
    padding,
    customStyle,
  ]);
  return (
    <StyledButton
      id={id}
      className={className}
      color={color}
      style={style}
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default React.memo(Button);
