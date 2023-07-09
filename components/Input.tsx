import { InputProps } from "@/types";

const Input: React.FC<InputProps> = ({ id, type, value, label, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="
          block rounded-md px-6 pt-6 pb-2 w-full
          text-md text-white bg-neutral-700 appearance-none
          focus:outline-none focus:ring-0 peer invalid:border-b-1
        "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
          absolute text-md text-zinc-400 duration-150 transform
          origin-[0] -translate-y-3.5 scale-75 top-3.5 z-10 left-6
          peer-focus:-translate-y-3.5 peer-placeholder-shown:scale-100
          peer-focus:scale-75 peer-placeholder-shown:translate-y-0
        "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
