import React, { CSSProperties, useMemo } from "react";
import { StyledImg, StyledImgBox } from "./styles";

interface IImgBox extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  padding?: string;
  margin?: string;
  width?: string;
  alt?: string;
  customStyle?: CSSProperties;
  handleClick?: () => void;
}

const ImgBox = (props: IImgBox) => {
  const {
    className,
    src,
    padding,
    width,
    margin,
    alt,
    customStyle,
    handleClick,
  } = props;

  const style = useMemo(() => {
    return {
      padding,
      margin,
      width,
      ...customStyle,
    };
  }, [padding, margin, customStyle]);

  return (
    <StyledImgBox className={className} style={style} onClick={handleClick}>
      <StyledImg
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </StyledImgBox>
  );
};

export default React.memo(ImgBox);
