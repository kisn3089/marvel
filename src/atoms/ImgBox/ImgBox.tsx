import React, { CSSProperties, useMemo } from "react";
import { StyledImg, StyledImgBox } from "./styles";

interface IImgBox extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
  alt?: string;
  srcSet?: string;
  sizes?: string;
  customStyle?: CSSProperties;
  handleClick?: () => void;
}

const ImgBox = (props: IImgBox) => {
  const {
    className,
    src,
    padding,
    width,
    height,
    margin,
    alt,
    srcSet,
    sizes,
    customStyle,
    handleClick,
  } = props;

  const style = useMemo(() => {
    return {
      padding,
      margin,
      // width,
      height,
      ...customStyle,
    };
  }, [padding, margin, customStyle]);

  return (
    <StyledImgBox className={className} onClick={handleClick}>
      <StyledImg
        src={src}
        alt={alt}
        srcSet={srcSet}
        style={style}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </StyledImgBox>
  );
};

export default React.memo(ImgBox);
