import { InputProps } from "@/types";

const Input: React.FC<InputProps> = ({ id, type, value, label, onChange }) => {
  return (
    <div className="input__container">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="input__field peer"
        placeholder=" "
      />
      <label htmlFor={id} className="input__label">
        {label}
      </label>
    </div>
  );
};

export default Input;
