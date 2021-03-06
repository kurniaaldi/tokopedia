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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: 8,
    gap: "0.5rem",
  },
  (props: any) => ({ width: props.width })
);

interface IPropsButton {
  children: ReactNode;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick?: any;
}

const Button = (props: IPropsButton) => {
  const { children, fullWidth = false, suffix, prefix, onClick } = props;
  return (
    <StyledButton onClick={onClick} width={fullWidth ? "100%" : "none"}>
      {prefix}
      {children}
      {suffix}
    </StyledButton>
  );
};

export default Button;
