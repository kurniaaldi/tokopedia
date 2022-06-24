import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button(
  {
    background: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: 8,
  },
  (props: any) => ({ width: props.width })
);

interface IPropsButton {
  children: ReactNode;
  fullWidth?: boolean;
}

const Button = (props: IPropsButton) => {
  const { children, fullWidth = false } = props;
  return <StyledButton width={fullWidth && "100%"}>{children}</StyledButton>;
};

export default Button;
