import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const CardRoot = styled.div({
  width: "100%",
  background: "lightblue",
  borderRadius: 8,
  position: "relative",
  height: "16.5rem",
  overflow: "hidden",
});

interface IPropsCard {
  children: ReactNode;
}

const Card = (props: IPropsCard) => {
  const { children } = props;
  return <CardRoot>{children}</CardRoot>;
};

export default Card;
