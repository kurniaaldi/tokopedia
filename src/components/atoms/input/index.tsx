import React, { ChangeEventHandler } from "react";
import styled from "@emotion/styled";

const WrapperInput = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
});

const ErrorMsg = styled.span({
  width: "100%",
  height: "100%",
  textAlign: "left",
  color: "#fa0000",
});

interface IPropsInput {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClickButton?: () => void;
  titleButton?: string;
  errorMsg?: string;
}

const Input = (props: IPropsInput) => {
  const {
    value,
    defaultValue,
    placeholder,
    onChange,
    name,
    onClickButton,
    titleButton,
    errorMsg,
  } = props;
  return (
    <div style={{ width: "100%", height: "100%", display: "inline-block" }}>
      <WrapperInput className="input-wrapper">
        <input
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          name={name}
          style={{ width: "100%" }}
        />
        {onClickButton && (
          <button onClick={onClickButton} type="submit">
            {titleButton || ""}
          </button>
        )}
      </WrapperInput>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </div>
  );
};

export default Input;
