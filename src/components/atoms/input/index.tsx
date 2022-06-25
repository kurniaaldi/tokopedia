import React, { ChangeEventHandler } from "react";
import styled from "@emotion/styled";

const WrapperInput = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
});

interface IPropsInput {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClickButton?: () => void;
  titleButton?: string;
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
  } = props;
  return (
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
  );
};

export default Input;
