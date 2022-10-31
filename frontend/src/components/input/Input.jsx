import { Label, Input } from "./styles";

export const Input = ({ label, onChange, type, value }) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        name={label}
        id={label}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
