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
  isSelected?: boolean;
  customStyle?: CSSProperties;
  handleClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const ImgBox = (props: IImgBox) => {
  const {
    className,
    src,
    padding,
    width,
    id,
    height,
    margin,
    alt,
    srcSet,
    sizes,
    isSelected,
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
    <StyledImgBox id={id} className={className} onClick={handleClick}>
      <StyledImg
        src={src}
        alt={alt}
        srcSet={srcSet}
        style={style}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        draggable={false}
        isSelected={isSelected}
      />
    </StyledImgBox>
  );
};

export default React.memo(ImgBox);
