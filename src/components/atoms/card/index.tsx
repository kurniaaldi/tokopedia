import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const CardRoot = styled.div({
  width: "100%",
  borderRadius: 8,
  position: "relative",
  overflow: "hidden",
});

interface IPropsCard {
  children: ReactNode;
}

const Card = (props: IPropsCard) => {
  const { children } = props;
  return <CardRoot data-testid="card-id">{children}</CardRoot>;
};

export default Card;
