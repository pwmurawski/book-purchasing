import { useRef } from "react";
import {
  InputCustomContainer,
  Input,
  Label,
  Error,
} from "./styles/InputCustomStyles";

interface IInputCustomProps {
  type?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  error?: string;
}

const defaultProps = {
  type: undefined,
  value: undefined,
  onChange: undefined,
  placeholder: null,
  error: undefined,
};

export default function InputCustom({
  type,
  value,
  onChange,
  placeholder,
  error,
}: IInputCustomProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputCustomContainer error={error ? true : undefined}>
      <Input
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <Label onClick={() => inputRef.current?.focus()}>{placeholder}</Label>
      {error ? <Error>{error}</Error> : null}
    </InputCustomContainer>
  );
}

InputCustom.defaultProps = defaultProps;
