import React from "react";
import styled from "@emotion/styled";

const WrapperInput = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
});

const Input = () => {
  return (
    <WrapperInput className="input-wrapper">
      <input placeholder="Search.." name="search" style={{ width: "100%" }} />
      <button type="submit">search</button>
    </WrapperInput>
  );
};

export default Input;
