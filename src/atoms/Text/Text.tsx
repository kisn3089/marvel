import React, { CSSProperties } from "react";
import { StyledText } from "./styles";

interface IText extends React.HTMLAttributes<HTMLSpanElement> {
  content: string;
  customStyle?: CSSProperties;
  fontSize?: string;
  fontWeight?: string;
  handleClick?: () => void;
}

const Text = (props: IText) => {
  const {
    id,
    className,
    content,
    color,
    handleClick,
    customStyle,
    fontSize,
    fontWeight,
  } = props;

  const style = React.useMemo(() => {
    return {
      color,
      fontSize,
      fontWeight,
      ...customStyle,
    };
  }, [color, customStyle, fontSize, fontWeight]);
  return (
    <StyledText
      id={id}
      className={className}
      style={style}
      onClick={handleClick}
    >
      {content}
    </StyledText>
  );
};

export default React.memo(Text);
