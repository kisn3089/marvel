import React, { CSSProperties, useMemo } from "react";
import { StyledImg, StyledImgBox } from "./styles";

interface IImgBox extends React.HTMLAttributes<HTMLImageElement> {
  content: string;
  padding?: string;
  margin?: string;
  alt?: string;
  customStyle?: CSSProperties;
  handleClick?: () => void;
}

const ImgBox = (props: IImgBox) => {
  const { className, content, padding, margin, alt, customStyle, handleClick } =
    props;

  const style = useMemo(() => {
    return {
      padding,
      margin,
      ...customStyle,
    };
  }, [padding, margin, customStyle]);

  return (
    <StyledImgBox className={className} style={style} onClick={handleClick}>
      <StyledImg src={content} alt={alt} />
    </StyledImgBox>
  );
};

export default React.memo(ImgBox);
