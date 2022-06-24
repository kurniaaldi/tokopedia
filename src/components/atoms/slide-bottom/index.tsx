import React, { CSSProperties, ReactNode } from "react";
import styled from "@emotion/styled";

const SlideUpBottom = styled.div(
  {
    position: "sticky",
    width: "100%",
    bottom: 0,
    maxHeight: "20rem",
    zIndex: 11,
    height: "auto",
    padding: "1rem",
    overflow: "auto",
    transform: "none",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  },
  (props) => ({ ...props.style })
);

interface IPropsSlideBottom {
  children: ReactNode;
  style?: CSSProperties;
}

const SlideBottom = (props: IPropsSlideBottom) => {
  const { children, style } = props;
  return <SlideUpBottom style={style}>{children}</SlideUpBottom>;
};

export default SlideBottom;
